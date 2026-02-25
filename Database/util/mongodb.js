const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://sharad:sharad@sharmongo.refxz19.mongodb.net/staybook?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then(client => {
      console.log("connected to mongodb");
      _db = client.db("staybook");
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getdb = () => {
  if (!_db) {
    throw new Error("database is not connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;