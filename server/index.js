const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
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

app.use("/cdn", express.static("files"));

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
  console.log("hashPassword", hashPassword);
  const sql = "INSERT INTO users (nickname, email, password) VALUES (?,?,?)";
  db.query(sql, [nickname, email, hashPassword], (err, result) => {
    if (result) {
      res.send(result);
    } else {
      console.log("Error", err);
    }
  });
});

app.post("/signin", (req, res) => {
  const { nickname, email, password } = req.body;
  console.log("WWWreq.body", req.body);
  console.log("WWWres", res);

  // if(!email && !nickname) {
  //   res.status(400).json({message: `User ${nickname} is not found`})
  // }
  const sql = "SELECT * FROM users";
  db.query(sql, [nickname, email, password], (err, result) => {
    console.log("AAAresult", result);

    const passResult = result.find(user => (user.email === email));
    console.log("AAApassResult", passResult);
    try {
      if (bcrypt.compareSync(password, passResult.password)) {
        console.log("User is logged in");
        console.log("password", password);
        console.log("passResult.password", passResult.password);
        res.status(200).json(passResult);
      } else {
        console.log("Not allowed");
        res.send("Not allowed");
      }
    } catch {
      // res.status(500);
    }
  });
});

// categories_pastille
app.post("/pastille", (req, res) => {
  const sql = "SELECT * FROM pastille_categories";
  db.query(sql, (err, result) => {
    try {
      res.send(result);
    } catch {
      console.log(err);
    }
    console.log("QQQresultresult", result);
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
