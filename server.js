const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// GET all PGs
app.get("/pgs", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./data/pgs.json"));
    res.json(data);
});

// ADD PG (owner)
app.post("/add-pg", (req, res) => {
    let pgs = JSON.parse(fs.readFileSync("./data/pgs.json"));
    pgs.push(req.body);
    fs.writeFileSync("./data/pgs.json", JSON.stringify(pgs, null, 2));
    res.send("PG Added");
});

// LOGIN
app.post("/login", (req, res) => {
    let users = JSON.parse(fs.readFileSync("./data/users.json"));

    let user = users.find(
        u => u.username === req.body.username && u.password === req.body.password
    );

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});
const cors = require("cors");
app.use(cors());
