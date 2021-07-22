import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const backend_host =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_HOST_PROD
    : process.env.REACT_APP_BACKEND_HOST;

const Login = ({ checkToken }) => {
  let history = useHistory();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    fetch(`${backend_host}/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        history.push("/");
        checkToken();
      })
      // didn't work with cors, but fetch did in Home.jsx
      // axios
      //   .post(`${backend_host}/api/login`, { code })
      //   .then((res) => {
      //     localStorage.setItem("token", res.data.token);
      //     history.push("/");
      //     checkToken();
      //   })
      .catch((err) => console.log(err));
  }, []);

  return <div>Loading...</div>;
};

export default Login;
