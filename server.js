const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

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