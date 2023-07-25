require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routers/productsRoutes");
const port = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ProductS
app.use("/api/v1/products", productRoute);

mongoose.set("strictQuery", false);
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("==================================");
        console.log("Connected to Database");
        console.log("==================================");

        app.listen(port, () => {
            console.log("=============Server===============");
            console.log(`Api Server running on port ${port}`);
            console.log("=============Server===============");
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
