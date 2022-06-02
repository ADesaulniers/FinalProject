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
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const fetch = require("node-fetch")

const getPlayerInfo = async (req, res) => {
  const fetchRequest = 'https://api.brawlstars.com/v1/players/%23YRQCR29J9'

    try {
      const rawPlayerInfo = await fetch(fetchRequest, { method: 'GET', 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BRAWLSTARS_KEY}`
      }
    });
      const parsedPlayerInfo = await rawPlayerInfo.json()
// console.log(rawPlayerInfo)
console.log(parsedPlayerInfo)
        res
            .status(200)
            .json({
              status: 200,
              playerInfo: parsedPlayerInfo,
            })
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: 500, message: "Internal server error" });
    }
  };

  module.exports = {
    getPlayerInfo,
  };

  