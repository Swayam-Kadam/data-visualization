require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require('./config/passport'); // Import passport config
const session = require("express-session"); 

connectToMongo();
const app = express();
const port = process.env.PORT || 9001;

app.use(cors());
app.use(bodyParser.json());

// Express session middleware
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: true, // Use "false" for localhost testing, true for production
        sameSite: "None",
      },
    })
  );

  
  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

app.use('/Auth',require('./routes/Users'))
app.use('/Auth', require('./routes/GoogleAuth'));
app.use('/Dataset',require('./routes/Datasets'));


app.listen(port,()=>{
    console.log(`App listening at https://localhost:${port}`)
})