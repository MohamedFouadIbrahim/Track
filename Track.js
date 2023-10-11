const Mongoose = require('mongoose')
const { Schema, model } = Mongoose

const trackSchema = new Schema({
   lat:{
      type: Number,
      required: true
   },
   long:{
      type: Number,
      required: true 
   },
   date:{
      type: Date,
      default: Date.now
   }
});

const Track = model('Track', trackSchema);

module.exports = Track