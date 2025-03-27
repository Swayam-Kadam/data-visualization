const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User')
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

// Route to initiate Google Authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route to handle POST request from frontend
// router.post('/google',async (req, res) => {
//   console.log("Received Google login request:", req.body);

//   // Extract token from frontend request
//   const { token } = req.body;
  
//   if (!token) {
//       return res.status(400).json({ error: "Token is required" });
//   }
//   res.json({ message: "Google authentication successful" });
// });


// Callback route for Google to redirect to
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard'); // Redirect to frontend dashboard
  }
);

// Route to handle POST request from frontend
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
router.post('/google', async (req, res) => {
  console.log('Google Auth Request:', req.body);

  const { token } = req.body;
  if (!token) return res.status(400).json({ error: 'Token is required' });

  try {
      // Verify Google token
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload(); // ✅ This is where you define 'payload'
      console.log('Google Payload:', payload); // Check what data Google returns

      let user = await User.findOne({ email: payload.email });

      //now theck if user with email does not exist then create a new user other wise not
      if (!user) {
          user = new User({
              name: payload.name,
              email: payload.email,
              password:'google-auth',
          });

          await user.save();
          console.log("New user saved:", user);
      } else {
          console.log("User already exists:", user);
      }

      res.json({ message: 'Login Successful', user });

  } catch (error) {
      console.error('Google Auth Error:', error);
      res.status(500).json({ error: 'Authentication failed' });
  }
});


// Logout Route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
