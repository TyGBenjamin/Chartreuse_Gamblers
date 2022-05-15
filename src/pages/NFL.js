// // fetch api
import React from "react";
import { Container } from "react-bootstrap";

const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.API_KEY;

const sportKey = "americanfootball_nfl";
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

function NFL() {
  return (
    <div className="nfl-header">
      <body>
        <header>
          <h1>Welcome to the NFL betting page</h1>
        </header>
        <a onClick={() => getOdds()} className="btnn1" type="submit">
          Click For SuperBowl Odds
        </a>
        <div>
          <h1>Superbowl odds</h1>
          <h2>Buffalo Bills</h2>
          <h2>+700</h2>
          <h2>Tampa Bay Buccaneers</h2>
          <h2>+750</h2>
          <h2>Kansas City Chiefs</h2>
          <h2>+900</h2>
          <h2>Green Bay Packers</h2>
          <h2>+1,000</h2>
          <h2>Los Angeles Rams</h2>
          <h2>+1,000</h2>
          <h2>San Francisco 49ers</h2>
          <h2>+1,600</h2>
          <h2>Dallas Cowboys</h2>
          <h2>+1,600</h2>
          <h2>Denver Broncos</h2>
          <h2>+1,600</h2>
          <h2>Los Angeles Chargers</h2>
          <h2>+1,600</h2>
          <h2>Cincinnati Bengals</h2>
          <h2>+2,000</h2>
          <h2>Baltimore Ravens</h2>
          <h2>+2,200</h2>
          <h2>Cleveland Browns</h2>
          <h2>+2,200</h2>
          <h2>Indianapolis Colts</h2>
          <h2>+2,500</h2>
          <h2>Arizona Cardinals</h2>
          <h2>+2,800</h2>
          <h2>Tennessee Titans</h2>
          <h2>+3,000</h2>
          <h2>Las Vegas Raiders</h2>
          <h2>+3,300</h2>
          <h2>Philadelphia Eagles</h2>
          <h2>+3,300</h2>
          <h2>Miami Dolphins</h2>
          <h2>+3,500</h2>
          <h2>New England Patriots</h2>
          <h2>+3,500</h2>
          <h2>Minnesota Vikings</h2>
          <h2>+4,000</h2>
          <h2>New Orleans Saints</h2>
          <h2>+4,500</h2>
          <h2>Washington Commanders</h2>
          <h2>+6,600</h2>
          <h2>Pittsburgh Steelers</h2>
          <h2>+9,000</h2>
          <h2>Jacksonville Jaguars</h2>
          <h2>+9,000</h2>
          <h2>Chicago Bears</h2>
          <h2>+10,000</h2>
          <h2>Carolina Panthers</h2>
          <h2>+10,000</h2>
          <h2>Seattle Seahawks</h2>
          <h2>+12,500</h2>
          <h2>New York Giants</h2>
          <h2>+12,500</h2>
          <h2>New York Jets</h2>
          <h2>+12,500</h2>
          <h2>Detriot Lions</h2>
          <h2>+15,000</h2>
          <h2>Atlanta Falcons</h2>
          <h2>+20,000</h2>
          <h2>Houston texans</h2>
          <h2>+25,000</h2>
        </div>
      </body>
    </div>
  );
}
export default NFL;
