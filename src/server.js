const http = require('https');
const helper = require('../src/lib/helper');
const dbMon = require("../src/models/mongodb");
require('dotenv').config()
const mongoose = require("mongoose");
const app = require('./app');

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

//logger = helper.getLogger('StoreManageSys');

async function startServer () {

  mongoose.connect("mongodb+srv://storeuser:BDWwaegd1yk2GtEd@cluster0.2qofb8v.mongodb.net/storedata?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
    //logger.info(`Listening on port ${PORT}...`);
  })
}

startServer()
