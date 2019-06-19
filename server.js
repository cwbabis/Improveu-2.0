const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const routes = require("./routes")
const app = express();
const mongoose = require("mongoose");
var multer = require("multer");




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(multer({dest: "./uploads",
rename: function (fieldname, filename){
  return filename
},
}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/improveu");
const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})
// API routes

app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
