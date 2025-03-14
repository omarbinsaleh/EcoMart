const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const reateLimit = require("express-rate-limit");
const app = express();

const rateLimiter = reateLimit({
   windowMs: 1 * 60 * 1000, // 1 minute,
   max: 5,
   message: 'Too many requests from this IP. Please try again later'
})

// application level middlewares
app.use(rateLimiter);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.send("Welcome the the server")
})

app.get('/api/users', (req, res) => {
   res.status(200).send({
      message: 'users profile are returned'
   })
});

// client error handling
app.use((req, res, next) => {
   createError(404, 'routes not found');
   next();
});

// server error handling
app.use((err, req, res, next) => {
   return res.status(err.status || 500).json({
      success: false,
      message: err.message
   });

});

// export the app
module.exports = app;