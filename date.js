module.exports.getDate = getDate;
function getDate() {
  const date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let currentDate = date.toLocaleDateString("en-US", options);
  return currentDate;
}

module.exports.getDay = getDay;
function getDay() {
  const date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let currentDate = date.toLocaleDateString("en-US", options);
  return currentDate;
}
