const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const yelp = require('yelp-fusion');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  next();
});

const apiKey = '6TlzC-_L3I4fA1f4Obda_Yff1xhuGPBRG1xt_wYfrM7LO_-Sl9TqiJV9C2nfx8oQyjCJh_1-jXV-zOUhP-FVmDWqB11rCQU7OHxUZlHymBhzHAWKQ25_zWcCc_umWnYx';

const searchRequest = {
  categories: 'popupshops',
  location: 'vancouver, bc'
};

const client = yelp.client(apiKey);

app.get('/shops', (req, res) => {
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    res.send(prettyJson);
    // console.log(firstResult)
  }).catch(e => {
    console.log(e);
  });

})

app.get('/', (req, res) => {
  res.send('Root page');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})