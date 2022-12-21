const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
module.exports = () => {
  return mongoose.connect("mongodb://localhost:27017/billingapp");
};
