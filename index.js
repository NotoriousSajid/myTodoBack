const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://todo:password@cluster0.z9ut5fq.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("unable to connect server!!!");
});

mongoose.connection.on("connected", (connected) => {
  console.log("cnct serer succ..");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Api");
});

app.use("/todo", require("./src/routes/Todo"));

app.listen(port, console.log("api working"));
