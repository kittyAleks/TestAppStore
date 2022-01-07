const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const morgan = require("morgan");

console.log("AS Server started");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KittyAleks",
  database: "KYRYLOVA",
});
module.exports = db;
db.connect(err => {
  if (err) {
    console.log("MySQL error");
    throw err;
  }
  console.log("MySQL connected");
});
const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(morgan("dev"));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post('/signup', (req, res) => {
//   console.log('Sign Up')
//   if ( !(req.body.nickname && (typeof req.body.nickname === 'string') && req.body.nickname.length > 2) ) {
//     res.status(500).json({desc: 'Name is too short'});
//     return;
//   }
//   res.json({ token: 'xxx' })
// })

app.post("/signup", (req, res) => {
  console.log("REQbody", req.body);
  const { nickname, email, password } = req.body;
  const sql = "INSERT INTO users (nickname, email, password) VALUES (?,?)";
  db.query(sql, [nickname, email, password], (err, res) => {
    console.log("QQQres", res);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
