const express = require("express");
const port = 8000;

const app = express();

// routes
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(port, () => {
    console.log("====================================");
    console.log(`Api Server running on port ${port}`);
    console.log("====================================");
});
