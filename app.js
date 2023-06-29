const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let listTitle = "";
let todo = [];
let workTodos = [];
let currentDate = date.getDate();

app.get("/", function (req, res) {
  listTitle = "Todo";
  res.render("index", {
    currentDate: currentDate,
    listTitle: listTitle,
    todo: todo,
  });
});

app.post("/", function (req, res) {
  let item = req.body.todo;
  todo.push(item);
  res.redirect("/");
});

app.get("/work", function (req, res) {
  listTitle = "Work Todo";
  res.render("workList.ejs", {
    currentDate: currentDate,
    listTitle: listTitle,
    workTodos: workTodos,
  });
});

app.post("/work", function (req, res) {
  let item = req.body.todo;
  workTodos.push(item);
  res.redirect("/work");
});

app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});
