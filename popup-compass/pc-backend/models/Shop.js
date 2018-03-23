const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  image_url: String,
  description: String,
  category: String,
  rating: Number,
  dates: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  location: {
    address1: String,
    city: String,
    country: String,
    state: String,
  },
  // phone: String
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;

