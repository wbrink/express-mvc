var express = require('express')
var router = express.Router()

// using the model part of mvc
const dog = require("../models/dog");


// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// define the home page route
router.get('/', function(req, res) {
  // using dog model 
  dog.selectAll((result) => {
    console.log(result);
    res.render("index", {dog: result});
  })
})

router.get("/dogs=10", function(req, res) {
  dog.selectAllWhere((result) => {
    console.log(result);
    res.render("partialsExample", {dog: result});
  })
})

module.exports = router

