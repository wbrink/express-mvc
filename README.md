# express-mvc
Simple MVC pattern example using Expressjs Handlebars and MYSQL.

## installation
npm i

## Notes
* Model, in this example refers to using ORM for the intended purpose of the model. 
  * (in this example dog.js is used to make queries to the `dog` table 
* View refers to the handlebars files that allow the user to interact with the model through the controller
* controller, refers the different route files that are made based on a particular function. 
  * In this example dogController.js refers to routes that deal with the dog model. 
  * It uses the express.Router class to make modular containers so server.js can import them

* ORM found in config folder is meant to be extendable to many models.

Routes are served on the controller files while express server configuration such as setting up ports,middleware,templating engines and starting server is done with server.js
