const mongoose = require("mongoose");

function connectAzureCosmosDb() {
  mongoose
    .connect(
      "mongodb://" +
        process.env.COSMOSDB_HOST +
        ":" +
        process.env.COSMOSDB_PORT +
        "/" +
        process.env.COSMOSDB_DBNAME +
        "?ssl=true&replicaSet=globaldb",
      {
        auth: {
          user: process.env.COSMOSDB_USER,
          password: process.env.COSMOSDB_PASSWORD,
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
      }
    )
    .then(() => console.log("Connection to cosmosDb successful"))
    .catch((err) => console.error(err));
}

function connectMongoDbAtlas({ db, user, pass }) {
  mongoose
    .connect(
      "mongodb+srv://" +
        user +
        ":" +
        pass +
        "@cluster0.hkoyx.mongodb.net/" +
        db +
        "?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
      }
    )
    .then(() => console.log("Connection to mongoDbAtlas successful"))
    .catch((err) => console.error(err));
}

module.exports = { connectMongoDbAtlas, connectAzureCosmosDb };
