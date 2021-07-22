require("dotenv/config");
const fetch = require("node-fetch");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.SLOPPY_KEY}`,
};

const getLogs = async () => {
  const res = await fetch(
    "https://api.sloppy.io/v1/apps/movie-ratings/services/backend/apps/server/logs?&from=2012-06-21",
    {
      method: "GET",
      headers,
    }
  );

  const json = await res.text();
  console.log(json.split("\n"));
};

getLogs();
