import React from "react";

const axios = require ('axios');

const apiKey = "fb81fa0baf4e34e314305c4c84a219ff"

const sportKey = 'basketball_nba'
const regions = 'us'
const markets = 'h2h'
const oddsFormat = 'decimal'
const dateFormat = 'iso'

axios.get('https://api.the-odds-api.com/v4/sports', {
    params: {
        apiKey
    }
})
.then(response => {
    console.log(response.data)
})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})

axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
    params: {
        apiKey,
        regions,
        markets,
        oddsFormat,
        dateFormat,
    }
})
.then(response => {
    console.log(JSON.stringify(response.data))

    console.log('Remaining requests', response.headers['x-requests-remains'])
    console.log('Used requests', response.headers['x-requests-used'])
})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})


function NBA() {
    return (
        <div className="nba-header">
            <header>
            <h1>Welcome to the NBA betting page.</h1>
            </header>
            <div>
                <h1>Championship Odds</h1>
                <h2>Phoenix Suns</h2><h2>+220</h2>
                <h2>Golden State Warriors</h2><h2>+230</h2>
                <h2>Milwaukee Bucks</h2><h2>+400</h2>
                <h2>Miami Heat</h2><h2>+410</h2>
                <h2>Boston Celtics</h2><h2>+1,100</h2>
                <h2>Philadelphia 76ers</h2><h2>+3,900</h2>
                <h2>Dallas Mavericks</h2><h2>+4,500</h2>
                <h2>Memphis Grizzlies</h2><h2>+24,000</h2>
            </div>
        </div>
    );
}
export default NBA;