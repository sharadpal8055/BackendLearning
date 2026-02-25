const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const Favourites = require("./favourites");
const { getdb } = require("../util/mongodb");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    const db=getdb();
    return db.collection("homes").insertOne(this).then((result)=>{
      console.log(result);
    })
  }

  static fetchAll(callback) {
    const filepath = path.join(rootDir, "data", "homes.json");

    fs.readFile(filepath, (err, data) => {
      let homes = [];

      if (!err) {
        homes = JSON.parse(data);
      }

      callback(homes);
    });
  }
  static findById(id, callback) {
    this.fetchAll((homes) => {
      const home = homes.find((h) => h.id === id);
      callback(home);
    });
  }
  static deleteById(id, callback) {
    this.fetchAll((homes) => {
      const updatedhomes = homes.filter((home)=>home.id!==id);
      fs.writeFile(path.join(rootDir,"data","homes.json"),JSON.stringify(updatedhomes),(error)=>{
        Favourites.deletefav(id,callback);
      })
    });
  }
};
