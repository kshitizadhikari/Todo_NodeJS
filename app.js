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

let todo = [];
let workTodos = [];

app.get("/", function (req, res) {
  res.render("index", { currentDate: currentDate, todo: todo });
  console.log(currentDate);
});

app.post("/", function (req, res) {
  let item = req.body.todo;
  todo.push(item);
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("workList.ejs", {
    currentDate: currentDate,
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
