const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root route (homepage)
app.get("/", (req, res) => {
    res.send("PG Finder Backend Running 🚀");
});

// GET all PGs
app.get("/pgs", (req, res) => {
    try {
        const filePath = path.join(__dirname, "data", "pgs.json");

        if (!fs.existsSync(filePath)) {
            return res.status(500).json({ error: "pgs.json file not found" });
        }

        const data = fs.readFileSync(filePath, "utf-8");

        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({
            error: "Server error",
            message: error.message
        });
    }
});

// ADD PG
app.post("/add-pg", (req, res) => {
    try {
        const filePath = path.join(__dirname, "data", "pgs.json");

        let pgs = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf-8");
            pgs = JSON.parse(data);
        }

        pgs.push(req.body);

        fs.writeFileSync(filePath, JSON.stringify(pgs, null, 2));

        res.json({ message: "PG Added Successfully" });
    } catch (error) {
        res.status(500).json({
            error: "Failed to add PG",
            message: error.message
        });
    }
});

// LOGIN
app.post("/login", (req, res) => {
    try {
        const filePath = path.join(__dirname, "data", "users.json");

        if (!fs.existsSync(filePath)) {
            return res.status(500).json({ error: "users.json not found" });
        }

        const data = fs.readFileSync(filePath, "utf-8");
        const users = JSON.parse(data);

        const user = users.find(
            u =>
                u.username === req.body.username &&
                u.password === req.body.password
        );

        if (user) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        res.status(500).json({
            error: "Login failed",
            message: error.message
        });
    }
});

// START SERVER
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running 🚀");
});