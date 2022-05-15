import React from "react";
import { Container } from "react-bootstrap";

const axios = require("axios");

const apiKey = "fb81fa0baf4e34e314305c4c84a219ff";

const sportKey = "baseball_mlb";
const regions = "us";
const markets = "h2h";
const oddsFormat = "decimal";
const dateFormat = "iso";

const axiosRun = () => {
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

function MLB() {
  return (
    <div className="mlb-header">
      <header className="mlbDiv">
        <h1>Welcome to the MLB betting page</h1>
      </header>
      <a onClick={() => getOdds()} className="btnn1" type="submit">
        Click Here World Series Odds
      </a>
      <div>
        <h1>Championship Odds</h1>
        <h2>Los Angeles Dodgers</h2>
        <h2>+500</h2>
        <h2>New York Mets</h2>
        <h2>+750</h2>
        <h2>New York Yankees</h2>
        <h2>+750</h2>
        <h2>Toronto Blue Jays</h2>
        <h2>+850</h2>
        <h2>Milwaukee Brewers</h2>
        <h2>+1,155</h2>
        <h2>Houston Astros</h2>
        <h2>+1,200</h2>
        <h2>Chicago White Sox</h2>
        <h2>+1,400</h2>
        <h2>Atlanta Braves</h2>
        <h2>+1,500</h2>
        <h2>Tampa Bay Rays</h2>
        <h2>+1,509</h2>
        <h2>Sand Diego Padres</h2>
        <h2>+1,595</h2>
        <h2>Los Angeles Angels</h2>
        <h2>+1,800</h2>
        <h2>San Fransisco Giants</h2>
        <h2>+2,000</h2>
        <h2>St. Louis Cardinals</h2>
        <h2>+2,200</h2>
        <h2>Philadelphia Phillies</h2>
        <h2>+2,926</h2>
        <h2>Minnesota Twins</h2>
        <h2>+3,263</h2>
        <h2>Seattle Mariners</h2>
        <h2>+3,300</h2>
        <h2>Boston Red Sox</h2>
        <h2>+4,136</h2>
        <h2>Cleveland Gaurdians</h2>
        <h2>+6,600</h2>
        <h2>Miami Marlins</h2>
        <h2>+6,600</h2>
        <h2>Colorado Rockies</h2>
        <h2>+9,400</h2>
        <h2>Detriots Tigers</h2>
        <h2>+10,000</h2>
        <h2>Chicago Cubs</h2>
        <h2>+13,700</h2>
        <h2>Oakland Athletics</h2>
        <h2>+20,000</h2>
        <h2>Kansas City Royals</h2>
        <h2>+20,100</h2>
        <h2>Texas Rangers</h2>
        <h2>+31,200</h2>
        <h2>Arizona Diamond Backs</h2>
        <h2>+35,000</h2>
        <h2>Washington Nationals</h2>
        <h2>+37,200</h2>
        <h2>Pittsburgh Pirates</h2>
        <h2>+40,000</h2>
        <h2>Baltimore Orioles</h2>
        <h2>+50,000</h2>
        <h2>Cincinnati Reds</h2>
        <h2>+100,000</h2>
      </div>
    </div>
  );
}
export default MLB;
