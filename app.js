const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let currentDate = date.toLocaleDateString("en-US", options);
  res.render("index", { currentDate: currentDate });
  console.log(currentDate);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
