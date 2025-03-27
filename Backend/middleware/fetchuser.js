require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: 'Please authenticate using a valid token' }); // ✅ Return after sending response
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next(); // ✅ Only proceed if no response was sent
    } catch (error) {
        return res.status(401).json({ error: "Invalid token, authentication failed" }); // ✅ Return after sending response
    }
}

module.exports = fetchuser;
