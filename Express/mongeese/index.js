const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");


// curl http://localhost:5000/api/products

// setup mongoose
mongoose.connect("mongodb://localhost/products", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        const app = express();
        app.use("/api", routes);
        app.listen(5000, () => {
            console.log("Server has started");
        })
    })