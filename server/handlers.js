"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, BRAWLSTARS_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//import node fetch
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// This is to get all stats from a player by his game Id

const getPlayerInfo = async (req, res) => {
  const id = req.params.playerId;
  const newId = id.slice(1);
  console.log(newId);
  const fetchRequest = `https://api.brawlstars.com/v1/players/%23${newId}`;

  try {
    const rawPlayerInfo = await fetch(fetchRequest, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BRAWLSTARS_KEY}`,
      },
    });
    const parsedPlayerInfo = await rawPlayerInfo.json();
    console.log(parsedPlayerInfo);
    res.status(200).json({
      status: 200,
      playerInfo: parsedPlayerInfo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

// This is to get all of the brawlers stats from Supercell

const getAllGameBrawlersStats = async (req, res) => {
  const fetchRequest = "https://api.brawlstars.com/v1/brawlers";

  try {
    const rawBrawlersStats = await fetch(fetchRequest, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BRAWLSTARS_KEY}`,
      },
    });
    const parsedBrawlersStats = await rawBrawlersStats.json();
    console.log(parsedBrawlersStats);
    res.status(200).json({
      status: 200,
      playerInfo: parsedBrawlersStats,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

const addUser = async (req, res) => {
  // TODO: Add user to MongoDB
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("FinalProject");
    const { name, email } = req.body;
    const newUser = { ...req.body, _id: uuidv4() };

    const makeNewUser = await db.collection("Users").insertOne(newUser);

    makeNewUser
      ? res.status(200).json({
          status: 200,
          newUser: newUser,
        })
      : res.status(404).json({ status: 404, message: "User not added" });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

const getUser = async (req, res, next) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("FinalProject");

    const { auth0Id } = req.params;

    // Check if user with this auth0Id already exist in MongoDB
    const result = await db.collection("Users").findOne({ _id: auth0Id });

    // If user exist, respond with status 200 and the user's data

    // If user does not exist pass the request to the next handler

    // TODO: add error handling

    console.log(result);
    // res.send(200);

    result ? res.status(200).json({ status: 200, data: result }) : next();

    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

module.exports = {
  getPlayerInfo,
  getAllGameBrawlersStats,
  getUser,
  addUser,
};
