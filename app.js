const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
// const path = require('path');

const volunteers = require("./routes/api/volunteers");
const elders = require("./routes/api/elders");

mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

  // app.get("/", (req, res) => {
  //   res.send("Hello Protect our Elders!")
  // });
  
  // Middleware
  app.use(passport.initialize());
  require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/volunteers", volunteers);
app.use("/api/elders", elders);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Listening on port ${port}`)});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
};