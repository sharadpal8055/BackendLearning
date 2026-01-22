const express=require('express');
const bodyParser = require('body-parser');
const path=require('path')
const contactrouter=express.Router();
contactrouter.get('/contact-us',(req,res,next)=>{
  console.log("contact-us middleware",req.url,req.method);
 res.sendFile(path.join(__dirname,'../','views','contact.html'))
})

contactrouter.use(bodyParser.urlencoded());

contactrouter.post('/contact-us',(req,res,next)=>{
  console.log("submit post middleware",req.url,req.method);
  console.log(req.body);
  res.redirect('/')
 //res.send(`<p>hello thsi is sharad Pal</p>`)
 next();
})
module.exports=contactrouter;