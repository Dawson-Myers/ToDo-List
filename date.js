//jshint esversion:6

exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};

//Date code is now completely out of the main code and can be required and used anywhere,
// const example = require(__dirname + "/date.js");  is how you require it.
