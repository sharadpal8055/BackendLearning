const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const favouritesPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourites {

  static addFavourite(homeId) {
    this.getfav((favourites) => {

      if (favourites.includes(homeId)) {
        console.log("Home already exists in favourites");
        return;
      }

      favourites.push(homeId);

      fs.writeFile(
        favouritesPath,
        JSON.stringify(favourites),
        (err) => {
          if (err) console.log(err);
        }
      );
    });
  }

  static getfav(callback) {
    fs.readFile(favouritesPath, (err, data) => {

      if (err) {
        return callback([]);
      }

      if (!data || data.length === 0) {
        return callback([]);
      }

      try {
        const parsed = JSON.parse(data);
        callback(parsed);
      } catch (error) {
        console.log("Invalid JSON file. Resetting...");
        callback([]);
      }

    });
  }

  static deletefav(homeId,callback){
    this.getfav((favourites)=>{
      const updatedfav=favourites.filter((id)=>id!==homeId);
      fs.writeFile(favouritesPath,JSON.stringify(updatedfav),callback);
    })

  }
  

};