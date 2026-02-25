const Home = require('../models/home');
exports.gethomes = (req, res,next) => {
  
Home.fetchAll((homes)=>{
res.render('host/add-home', {title:'add homes', homes: homes });
});
  
};
exports.getUserHomes = (req, res) => {
  Home.fetchAll((homes) => {
    res.render('user/user', {
      homes: homes,
      title: 'Available Homes'
    });
  });
};
exports.getaddHomes = (req, res,next) => {
   Home.fetchAll((homes) => {
    res.render('host/edit-home', {
      homes: homes,
      title: 'Available Homes'
    });
  });
};
exports.geteditHomes = (req, res, next) => {

  const editing = req.query.editing === "true";
  const homeId = req.params.homeId;

  if (!editing) {
    return res.redirect("/");
  }

  Home.findById(homeId, (home) => {

    if (!home) {
      return res.redirect("/host/host-home-list");
    }

    console.log(editing, homeId);

    res.render("host/edit-home", {
      editing: editing,
      homeId: homeId,
      title: "edit home",
      currentPage: "edithome",
      home: home   // ✅ NOW home EXISTS
    });

  });

};

exports.postedithomes=(req,res,next)=>{
  const {id,houseName,price,location,rating,photoUrl}=req.body
  const home=new Home(houseName,price,location,rating,photoUrl);
  home.id=id;
  home.save();
res.redirect('/')
}

exports.posthomes = (req, res, next) => {
  const {houseName,price,location,rating,photoUrl}=req.body;
  const home=new Home(houseName,price,location,rating,photoUrl);
  home.save();
 
console.log();
res.redirect("/");

 
};
exports.postDeleteHome=(req,res,next)=>{
  const homeId=req.params.homeId;
  Home.deleteById(homeId,(error)=>{
    if(error){
      console.log("error deleting home")
    }
    res.redirect('/')
  })
}
