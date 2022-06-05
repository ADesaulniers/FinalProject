"use strict";

const express = require("express");
const morgan = require("morgan");

const {
  getPlayerInfo,
  getAllGameBrawlersStats,
  getUser,
  addUser,
} = require("./handlers");

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // get all statistics from a specific player by their player id
  .get(`/api/get-player-info/:playerId`, getPlayerInfo)
  .get("/api/get-all-game-brawlers-stats", getAllGameBrawlersStats)

  // Verify if a user is in the database, if not, it create a new user
  .post("/api/verify-user/:auth0Id", getUser, addUser)

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
