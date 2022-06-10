"use strict";

const express = require("express");
const morgan = require("morgan");

const {
  getPlayerInfo,
  getAllGameBrawlersStats,
  addUser,
  updateUser,
  getUserInfo,
} = require("./handlers");

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // get all statistics from a specific player by their player id
  .get(`/api/get-player-info/:playerId`, getPlayerInfo)
  .get("/api/get-user-info", getUserInfo)
  .get("/api/get-all-game-brawlers-stats", getAllGameBrawlersStats)

  // Add user infos to database
  .post("/api/add-user", addUser)
  .put("/api/add-player-tag", updateUser)

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
