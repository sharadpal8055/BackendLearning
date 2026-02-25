const Favourites = require("../../models/favourites");
const Home = require("../../models/home");
const { findById } = require("../../models/home");

exports.gethomedetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home is not found");
      return res.redirect("/");
    }
    console.log(home);
    res.render("store/home-details", { title: "Details", home: home });
  });
};
let favouriteHomes = [];

exports.favouritehomes = (req, res) => {
  const homeId = req.body.homeId;

  Home.findById(homeId, (home) => {
    if (!home) return res.redirect("/");
console.log("added to favourite",homeId)
    favouriteHomes.push(home);

    res.redirect('/store/favourites');
  });
};

exports.getFavourites = (req, res) => {
  Favourites.getfav((favourites)=>{
    Home.fetchAll((registeredhomes)=>{
      const favwithdetails=favourites.map(homeId=>registeredhomes.find(home=>home.id===homeId))
        res.render("store/favourite-list", {
    title: "Favourite Homes",
    home: favwithdetails
  });
    })
  })

};
exports.postFavourites = (req, res) => {
  const homeId = req.body.homeId;
 Favourites.addFavourite(homeId);
 res.redirect('/store/favourites');
};
exports.deletefav = (req, res) => {
  const homeId = req.body.homeId;
Favourites.deletefav(homeId,(error)=>{
  if(error){
    console.log("error deleting favourite")
  }
  res.redirect('/favourites')
})
};

