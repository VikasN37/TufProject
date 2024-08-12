const express = require("express");
const morgan = require("morgan");
const server = express();
const dotenv = require("dotenv");
const mySqlPool = require("./config/database");
const cardRoute = require("./routes/cardRoute");
const cors = require("cors");

dotenv.config();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/v1/cards", cardRoute);

mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("SQL connected");
    server.listen(process.env.PORT, () => {
      console.log(`server started at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
