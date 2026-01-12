const http=require('http');
const express=require('express');
const app=express();
const server=http.createServer(app);
app.use((req,res,next)=>{
  console.log("first middleware",req.url,req.method)
  next();
})
app.use((req,res,next)=>{
  console.log("second middleware",req.url,req.method)
 next();
})
app.use((req,res,next)=>{
  console.log("third middleware",req.url,req.method);
 // res.send(`<p>hello thsi is sharad Pal</p>`)
 next();
})
app.use('/',(req,res,next)=>{
  console.log("/home middleware",req.url,req.method);
 //res.send(`<p>hello thsi is sharad Pal</p>`)
 next();
})
app.get('/contact-us',(req,res,next)=>{
  console.log("contact-us middleware",req.url,req.method);
  res.send(`

   
      <h2>Contact Form</h2>

      <form method="POST" action="/contact-us">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br><br>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br><br>

        <button type="submit">Submit</button>
      </form>
 
`);

 next();
})

app.post('/contact-us',(req,res,next)=>{
  console.log("submit post middleware",req.url,req.method);
 //res.send(`<p>hello thsi is sharad Pal</p>`)
 next();
})


const PORT=8055;
server.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`)
})