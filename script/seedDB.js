const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/improveu"
  );

const improveSeed = [
    {
        name: "John Smith",
        password: "JSmith21",
        title: "Read more",
        goal: "I would lke to read more throughout the week, possibly start with 4 paragraphs 3 times a week."
    }
];

