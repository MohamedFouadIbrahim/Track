const express = require("express");
const serverless = require("serverless-http");
const Mongoose = require('mongoose')
const Track = require('../Track')
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8000
const uri = process.env.MONGO_URI || "mongodb+srv://MohamedFouad:Hamoshayyy66%40%40@mofouadcluster.v3rgo.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


Mongoose.connect(uri)


router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.post('/', (req, res) => {
  const { lat, long } = req.body

  const track = new Track({
    lat,
    long
  })
  track.save().then(() => {
    res.status(200).json({
      lat,
      long
    })
  })

})

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
