const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
// import { engine } from "express-handlebars";

//Set Handlebars Middleware
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.render("home", {
    stuff: "This is khandelwal",
  });
});
//set Static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("Server running on port " + PORT));
