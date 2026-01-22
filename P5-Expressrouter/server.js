const http=require('http');
const express=require('express');
const path=require('path')
const app=express();
const server=http.createServer(app);
const homerouter=require('./routes/home')
const contactrouter=require('./routes/contactus')
app.use(express.static(path.join(__dirname, "public")));
app.use(contactrouter);
app.use(homerouter);



app.use((req,res,next)=>{
res.status(404).send(`<h1>404 nothing found go back you bitch</h1>`)
})


const PORT=8055;
server.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`)
})