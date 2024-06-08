const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authorization header missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.userId) {
            req.userId = decoded.userId;
            return next();
        } else {
            return res.status(401).json({ message: "Invalid token: userId missing" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Token verification failed", error: error.message });
    }
};

module.exports = {
    authMiddleware
};
