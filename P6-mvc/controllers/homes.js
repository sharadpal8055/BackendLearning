const homes = [];

exports.gethomes = (req, res, next) => {
  res.render('host/add-home', { title: 'add home',homes:homes});
};

exports.posthomes = (req, res, next) => {
  homes.push({
    houseName: req.body.houseName,
    pricePerNight: req.body.pricePerNight,
    location: req.body.location,
    rating: req.body.rating,
    photo: req.body.photo
  });
console.log(homes);
res.redirect("/");

 
};
 exports.homes = homes;

