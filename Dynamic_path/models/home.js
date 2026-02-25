const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const Favourites = require("./favourites");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    // this.id=Math.random().toString();
    Home.fetchAll((registeredhomes) => {
      console.log(registeredhomes, this);
      if (this.id) {
        registeredhomes = registeredhomes.map((home) => {
          console.log(home.id === this.id);
          if (home.id === this.id) {
            return this;
          }
          return home;
        });
      }
      else{
        console.log("new home");
        this.id=Math.random().toString();
        registeredhomes.push(this);
      }
     
      const filepath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(filepath, JSON.stringify(registeredhomes), (err) => {
        if (err) console.log(err);
      });
    });
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
