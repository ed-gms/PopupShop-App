const express = require('express')
const app = express()
const Shop = require('./models/Shop')
const port = process.argv[2] || 8081
const yelp = require('yelp-fusion');
const bodyParser = require('body-parser')
const apiKey = require('./apiKey')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db at /data/db/")
});

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  next();
});

const searchRequest = {
  categories: 'popupshops',
  location: 'vancouver, bc'
};

const client = yelp.client(apiKey);

// (database / API)
app.get('/shops', async (req, res, next) => {
  let shops
  try {
    // MONGO
    const mongoData = await Shop.find({})
      .then(Shops => {
        shops = Shops
      })

    // YELP API
    const yelpData = await client.search(searchRequest).then(response => {
      console.log(JSON.parse(response.body))
      debugger
      const firstResult = response.jsonBody.businesses;
      const prettyJson = firstResult
      let newShops = shops.concat(prettyJson)
      res.send(newShops);
    }).catch(e => {
      console.log(e);
    })
  } catch (e) {
    next(e)
  }

})

// ***MONGO***

// MOCKUP DATA
let newShop = Shop(
  {
    name: "The East Exchange",
    image_url: "https://images.unsplash.com/photo-1490289290721-2fe480322f21?ixlib=rb-0.3.5&s=8698fa7d18ebdd0f0f9af914243fc222&auto=format&fit=crop&w=1350&q=80",
    dates: "December 10 at the Russian Hall.",
    description: "As its name suggests, the East Exchange spotlights maker from the city’s East Side, including Oona Clothing Company, the Rad Scientist, and more.Expect seasonal décor, giftable oddities, cannabis-infused topicals, and more.",
    // category: String,
    // rating: Number,
    coordinates: {
      latitude: 000,
      longitude: 001,
    },
    location: {
      address1: "600 Campbell Street",
      city: "Vancouver",
      // zip_code: String,
      country: 'CA',
      state: "BC",
    }
  }
);

// *CREATE
// newShop.save()
//   .then(shop => {
//     console.log('Shop created.')
//   })
//   .catch(err => {
//     console.log(err);
//   })

// *UPDATE
// let shop = req.body.shop
// let update = {
//   name: shop.name,
//   address: shop.address
// }
// let query = { "_id": shop._id }

// Task.findOneAndUpdate(query, update, { new: true, runValidators: true })
//   .then(updatedObject => {
//     res.json(updatedObject);
//   })
//   .catch(err => {
//     console.log(err)
//     res.status(400).json({ err });
//   })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})