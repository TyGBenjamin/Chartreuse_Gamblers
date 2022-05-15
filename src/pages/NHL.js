import React from "react";
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.API_KEY;

const sportKey = "icehockey_nhl";
const regions = "us";
const markets = "h2h";
const oddsFormat = "decimal";
const dateFormat = "iso";

const runAxios = () => {
  axios
    .get("https://api.the-odds-api.com/v4/sports", {
      params: {
        apiKey,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });
};

const getOdds = () => {
  axios
    .get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
      params: {
        apiKey,
        regions,
        markets,
        oddsFormat,
        dateFormat,
      },
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));

      console.log("Remaining requests", response.headers["x-requests-remains"]);
      console.log("Used requests", response.headers["x-requests-used"]);
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });
};

function NHL() {
  return (
    <div className="nhl-header">
      <header>
        <h1>Welcome to the NHL betting page</h1>
      </header>
      <a onClick={() => getOdds()} className="btnn1" type="submit">
        Click Here Stanley Cup Odds
      </a>
      <div>
        <h1>Championship Odds</h1>
        <h2>Colorado Avalanche</h2>
        <h2>+220</h2>
        <h2>Florida Panthers</h2>
        <h2>+470</h2>
        <h2>Calgary Flames</h2>
        <h2>+600</h2>
        <h2>Toronto Maple Leafes</h2>
        <h2>+800</h2>
        <h2>Carolina Hurricanes</h2>
        <h2>+1,000</h2>
        <h2>Pittsburgh Penguins</h2>
        <h2>+1,700</h2>
        <h2>Tampa Bay Lightning</h2>
        <h2>+1,700</h2>
        <h2>St. Louis Blues</h2>
        <h2>+1,800</h2>
        <h2>Boston Bruins</h2>
        <h2>+2,100</h2>
        <h2>Edmonton Oilers</h2>
        <h2>+3,000</h2>
        <h2>New York Rangers</h2>
        <h2>+3,000</h2>
        <h2>Minnesota Wild</h2>
        <h2>+3,100</h2>
        <h2>Los Angeles kings</h2>
        <h2>+3,600</h2>
        <h2>Dallas Stars</h2>
        <h2>+7,000</h2>
        <h2>Washington Capitals</h2>
        <h2>+9,500</h2>
      </div>
    </div>
  );
}
export default NHL;
