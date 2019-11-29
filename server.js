const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const users = require("./routes/user.route");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use("/api", users);

app.get("/", (req, res) => {
  res.send("Welcome to Team Work App");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening at port ${port}...`));
