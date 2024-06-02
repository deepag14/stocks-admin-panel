const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const StocksController = require("./src/controllers/stocks.controllers");
const AdminController = require("./src/controllers/admin.controller");

const app = express();

// changes

app.options("*", cors());
app.use(cors());

let port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://deepalakshmig14:Jesusde1406@cluster0.lg6jaya.mongodb.net/Stocks"
  )
  .then((e) => {
    console.log("Database Connected to Mongoose");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/create/stocks", StocksController.createstocks);
app.get("/get/stocks", StocksController.getstocks);
app.get("/get/stocks/:id", StocksController.getstocksbyid);
app.delete("/delete/stocks/:id", StocksController.deletestocks);
app.put("/update/stocks/:id", StocksController.updatestocks);

//Admin
app.post("/admin", AdminController.admindetails);
app.post("/admin/login",AdminController.LoginByEmailAndPassword)


app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
