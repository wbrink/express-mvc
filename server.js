const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

// serves static content from the public directory
app.use(express.static(path.join(__dirname, "public")));

// middleware to parse incoming requests with data stored in the body of the request
app.use(express.urlencoded( {extended: true })); // parses content-type : "x-www-form-urlencoded"
app.use(express.json()); // parses content-type : "application/json"

// setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them. //using controller portion
var routes = require("./controllers/dogController.js");
app.use(routes);


app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});