require("dotenv/config");
const fetch = require("node-fetch");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.SLOPPY_KEY}`,
};

const patch = async (url, image) => {
  const res = await fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      image,
    }),
  });

  const json = await res.json();
  console.log("response: ", json);
};

const restart = async (url) => {
  const res = await fetch(url, {
    method: "POST",
    headers,
  });
  const json = await res.json();
  console.log("response: ", json);
};

const deployToSloppy = async () => {
  console.log("Updating images on sloppy...");

  try {
    await patch(
      "https://api.sloppy.io/v1/apps/movie-ratings/services/frontend/apps/app",
      "avttcs/movie-frontend:latest"
    );
    console.log("frontend updated");

    await patch(
      "https://api.sloppy.io/v1/apps/movie-ratings/services/backend/apps/server",
      "avttcs/movie-backend:latest"
    );
    console.log("backend updated");

    console.log("Waiting 45 soconds before restarting...");
    console.time("deploy");

    setTimeout(async () => {
      await restart(
        "https://api.sloppy.io/v1/apps/movie-ratings/services/frontend/apps/app/restart"
      );

      await restart(
        "https://api.sloppy.io/v1/apps/movie-ratings/services/backend/apps/server/restart"
      );

      console.log("apps restarted");
      console.timeEnd("deploy");
    }, 45000);
  } catch (error) {
    console.error(error);
  }
};

console.log("Waiting 30 seconds for dockerhub to refresh...");

setTimeout(() => {
  console.log("Starting deployment...");
  deployToSloppy();
}, 30000);
