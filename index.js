const express = require("express");
const connect = require("./src/configs/db");
const cors = require("cors");
const userController = require("./src/controllers/user.cntroller");
const { register, login } = require("./src/controllers/auth.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userController);

// Post method with Register Route...
app.post("/register", register);

// Post method with login Route...
app.post("/login", login);
const PORT=process.env.PORT || 9555;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening to port ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
