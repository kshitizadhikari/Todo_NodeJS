const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

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
let listTitle = "";
let todo = [];
let workTodos = [];

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
  console.log(req.body.submitBtn);
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
