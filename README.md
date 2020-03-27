# express-mvc
Simple MVC pattern example using Expressjs Handlebars and MYSQL.

## installation
npm i

## Notes
* Model refers to the a very simple orm that uses MYSQL
* View refers to the handlebars files that allow the controller to connect the model and view
* controller refers to the controller folder that contains files that handles routes based on a certain function. In this example the controller refers to the dog table. They use the express.Router class to make modular containers.

Routes are served on the controller files while express server configuration such as setting up ports,middleware,templating engines and starting server is done with server.js
