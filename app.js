const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const date = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
let currentDate = date.toLocaleDateString("en-US", options);

let todo = [];

app.get("/", function (req, res) {
  res.render("index", { currentDate: currentDate, todo: todo });
  console.log(currentDate);
});

app.post("/", function (req, res) {
  let item = req.body.todo;
  todo.push(item);
  res.render("index", { currentDate: currentDate, todo: todo });
  console.log(todo);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
