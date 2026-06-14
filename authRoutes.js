const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Simple admin login (demo only)
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin123") {
        const token = jwt.sign({ user: "admin" }, process.env.JWT_SECRET);
        return res.json({ token });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;