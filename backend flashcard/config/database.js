const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "#123456789vikas",
  database: "cardsdb",
});

module.exports = mySqlPool;
