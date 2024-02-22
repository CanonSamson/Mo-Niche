// 1. Install dependencies
// npm install jsonwebtoken

// 2. Authentication Middleware
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // You should store this securely, preferably in an environment variable

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next(); // Pass the request to the next middleware
    });
};
