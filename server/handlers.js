"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, BRAWLSTARS_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//import node fetch
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Get user information from MongoDB
const getUserInfo = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  try {
    const db = client.db("FinalProject");
    const userData = await db.collection("Users").find().toArray();
    const result = userData.map((data) => {
      return data;
    });
    if (result.length === 0) {
      res.status(404).json({ status: 404, message: "No user data found" });
    } else {
      res.status(200).json({ status: 200, data: result });
    }
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

// This is to get all stats from a player by his game Id in the Brawl Stars API
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

// Add user infos to mongoDB
const addUser = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("FinalProject");
    const newUser = { ...req.body };
    const query = { _id: req.body._id };
    const update = { $set: newUser };
    const option = { upsert: true };
    const makeNewUser = await db
      .collection("Users")
      .updateOne(query, update, option);
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

const updateUser = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();
    const db = client.db("FinalProject");
    const query = { _id: req.body._id };
    console.log(req.body);
    const playerTag = { ...req.body };
    const update = { $set: playerTag };
    const option = { upsert: true };

    const addPlayerTag = await db
      .collection("Users")
      .updateOne(query, update, option);
    addPlayerTag
      ? res.status(200).json({
          status: 200,
          message: "Player's tag added!",
        })
      : res.status(404).json({ status: 404, message: "User not found" });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

module.exports = {
  getPlayerInfo,
  getAllGameBrawlersStats,
  addUser,
  updateUser,
  getUserInfo,
};
