const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const mysql = require("mysql2");
const morgan = require("morgan");

console.log("AS Server started");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KittyAleks",
  database: "KYRYLOVA",
});

db.connect(err => {
  if (err) {
    console.log("MySQL error");
    throw err;
  }
  console.log("MySQL connected");
});
const app = express();

app.use('/cdn', express.static('files'));

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
  const { nickname, email, password } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);
  console.log('hashPassword', hashPassword)
  const sql = "INSERT INTO users (nickname, email, password) VALUES (?,?,?)";
  db.query(sql, [nickname, email, hashPassword], (err, result) => {
    if (result) {
      res.send(result);
    } else {
      console.log("Error", err);
    }
  });
});

app.post("/signin", ((req, res) => {
  const { nickname, email, password } = req.body;
  const sql = "SELECT * FROM users WHERE nickname = ? AND email = ?  AND password = ?";
  db.query(sql, [nickname, email, password], (err, result) => {
    if (result.length > 0) {
      console.log('AAAresult', result)
      res.json({ result });
    } else {
      res.send({ message: "Wrong nickname/email/password combination" });
    }
  });
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
