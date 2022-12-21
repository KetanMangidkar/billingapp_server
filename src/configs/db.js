const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
module.exports = () => {
  return mongoose.connect(process.env.mongoURI);
};
