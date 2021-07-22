const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");

const { SECRET, CLIENT_ID, CLIENT_SECRET, FRONTEND_HOST } = process.env;

const openidConfigUrl =
  "https://accounts.google.com/.well-known/openid-configuration";

const getOptions = (code) => ({
  method: "POST",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: `${FRONTEND_HOST}/login`,
    grant_type: "authorization_code",
  }),
});

async function loginCheck(req, res) {
  const { code } = req.body;

  try {
    const configRes = await fetch(openidConfigUrl); //opc.

    const { token_endpoint } = await configRes.json();

    const openidRes = await fetch(token_endpoint, getOptions(code));

    const openidObj = await openidRes.json();

    console.log("openid response: ", openidObj);

    const { sub, name, email } = jwt.decode(openidObj.id_token);

    jwt.sign(
      {
        sub,
        name,
        email,
      },
      SECRET,
      (err, token) => {
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(403).json({ msg: "Authentication failed." });
  }
}

module.exports = { loginCheck };
