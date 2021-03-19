const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const volunteers = require("./routes/api/volunteers");
const elders = require("./routes/api/elders");


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello Protect our Elders!")
});

app.use("/api/volunteers", volunteers);
app.use("/api/elders", elders);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});