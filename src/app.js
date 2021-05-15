const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

//TODO Your goal for this checkpoint is to get the tests to pass. To do so, you will need to fix the code that already exists inside of the app.js file. Carefully look over the order of the routes and how the different route and query parameters are being used to solve this challenge.



// Route functions
const sayWelcome = (req, res) => {
  const phrase = "Welcome to the server";
  const name = req.query.name;
  const content = name ? `${phrase}, ${name}!` : `${phrase}!`;
  res.send(content);
};

const sayGoodbye = (req, res) => {
  const phrase = "We're sorry to see you go";
  const name = req.query.name;
  const content = name ? `${phrase}, ${name}!` : `${phrase}!`;
  res.send(content);
};

const saySomething = (req, res) => {
  console.log(req.params);
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

// Routes
app.get("/say/welcome", sayWelcome);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/:greeting", saySomething);

module.exports = app;
