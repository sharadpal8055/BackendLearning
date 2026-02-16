const express=require('express');
const homerouter=express.Router();
homerouter.use('/',(req,res,next)=>{
  console.log("/home middleware",req.url,req.method);
 res.send(`<p>hello this is sharad Pal</p>`)
 
})
module.exports=homerouter;