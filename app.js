const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// custom module imports
const db = require("./db");

// inject .env to process.env
require("dotenv").config();

db.connectMongoDbAtlas({
  db: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
});

const app = express();

app.use(logger("dev"));

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//for development
if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    res.json({
      family: "http://localhost:3000/family",
      family_d: "http://localhost:3000/family/d",
      vacation: "http://localhost:3000/vacation",
      vacation_d: "http://localhost:3000/vacation/d",
    });
  });
}

//for production
if (process.env.NODE_ENV === "production") {
  // static contents
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

// routes
app.use("/vacation", require("./routes/vacationRouter"));
app.use("/family", require("./routes/familyRouter"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
