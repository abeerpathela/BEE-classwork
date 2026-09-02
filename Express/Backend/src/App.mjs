// // Get Request

// import express from 'express';
// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config();

// const PORT = Number(process.env.PORT) || 3000;
// const __dirname = import.meta.dirname;

// const app = express();

// app.use(express.static(path.join(__dirname, './public')));

// const users = [
//   { userid: 1, username: "Admin" },
//   { userid: 2, username: "Guest" },
//   { userid: 3, username: "Student" }
// ];


// app.get('/', (req,res) => {
//     res.send("Express Server Started...");
// });

// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, './Index.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/Login.html'));
// });

// app.get('/signup', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/Signup.html'));
// });

// app.get('/signupdata', (req, res) => {
//   console.log(req.query);
//   res.redirect('/login');
// });

// app.get('/logindata', (req, res) => {
//   console.log(req.query);
//   res.redirect('/');
// });


// // app.get('/Stitchhh.jpeg', (req, res) => {
// //   res.sendFile(path.join(__dirname, '/Stitchhh.jpeg'));
// // });

// app.get("/api/users", (req, res) => {
// //   res.send(users);
//   res.json(users);
// });

// // app.get('{/*splat}', (req, res) => { // Fallback Route
// //     res.status(404).send("Not Found");
// // });

// // app.get('/*splat', (req, res) => { // Fallback Route
// //     res.status(404).send("Not Found");
// // });

// // app.all('/*splat', (req, res) => { // Fallback Route
// //     res.statusCode(303);
// // });

// app.listen(PORT, (err) => {
//     console.log(`Server listening on port ${PORT}...`);
// });






// Post Request

import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import {session} from "express-session"
import authMiddleware from './auth/authmiddleware.mjs';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const __dirname = import.meta.dirname;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(session({
      secret:'my-secret-key',
      resave: false,
      saveUninitialized: true,
      cookie:{
        secure: false,
        maxAge: 24*60*60*1000
      }

}));

const users = [
  { userid: 1, username: "Admin" },
  { userid: 2, username: "Guest" },
  { userid: 3, username: "Student" }
];


app.get('/', (req,res) => {
    res.send("Express Server Started...");
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './Index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './public/Login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './public/Signup.html'));
});

app.get('/dashboard',authMiddleware, (req, res) => {

    return res.sendFile(path.join(__dirname, './public/Dashboard.html'));

});

app.get('/products', (req, res) => {
  if(req.session.username && req.session.password){
    return res.sendFile(path.join(__dirname, './public/products.html'));
  }
  res.redirect('/login');
});

app.get('/orders', (req, res) => {
  if(req.session.username && req.session.password){
    return res.sendFile(path.join(__dirname, './public/orders.html'));
  }
  res.redirect('/login');
});

app.post('/signupdata', (req, res) => {
  fs.readFile(path.join(__dirname, './userCred.json'), 'utf-8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      let userCredentials = JSON.parse(data);
      let userCheck = userCredentials.filter(user => user.username == req.body.username || user.email == req.body.email)
      if(userCheck.length > 0) {
        res.send({error: "User or email already registered!"});
        return;
      } else {
        userCredentials.push(req.body);
      
        fs.writeFile(path.join(__dirname, './userCred.json'), JSON.stringify(userCredentials), (err) => {
          if(err) {
            res.sendStatus(500);
          } else {
            res.send({redirectedURL: '/login'})
          }
        });
      }
    }
  });
  // res.send({redirectedURL: '/login'});
});

app.post('/logindata', (req, res) => {
  fs.readFile(path.join(__dirname, './userCred.json'), 'utf-8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      let users = JSON.parse(data);
      let userCheck = users.filter(user => (user.username = req.body.username && user.password == req.body.password));
      if(userCheck.length > 0) {
        req.session.username = req.body.username;
        req.session.password = req.body.password;
        res.redirect('/dashboard');
      } else {
        res.redirect('/signup');
      }
    }
  });
  // res.redirect('/');
});

app.listen(PORT, (err) => {
    console.log(`Server listening on port ${PORT}...`);
});