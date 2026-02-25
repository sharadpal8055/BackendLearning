const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* 🔥 VERY IMPORTANT — serve static files */
app.use(express.static(path.join(__dirname, 'public')));


const { hostrouter } = require('./routes/host');
const userrouter = require('./routes/user');
const storerouter = require('./routes/store');
const errorcontroller=require('./controllers/error')
app.use((req, res, next) => {
  res.locals.activePath = req.path;
  next();
});

/* Routes */
app.use('/host', hostrouter);
app.use(userrouter);
app.use('/store', storerouter);

/* 404 */
app.use(errorcontroller.geterror);

const PORT = 8055;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
