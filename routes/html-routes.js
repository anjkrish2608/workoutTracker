var path = require("path");

module.exports = function (app) {

  //Routes for index page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log("index page displayed;")
  });

  //Routes for stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
    console.log("stats page displayed;")

  });

  //Routes for excercise page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    console.log("exercise page displayed;")
  });
};
