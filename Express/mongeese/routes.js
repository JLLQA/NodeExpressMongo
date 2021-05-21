const express = require("express");
const router = express.Router();

const Product = require("./models/product");

// Get all products
// curl localhost:5000/api/products/getAll
router.get("/products/getAll", async(req, res) => {
    const prod = await Product.find();
    res.send(prod);
})

// Get one products
// curl localhost:5000/api/products/getOne
router.get("/products/getOne/:id", async(req, res) => {
    try {
        const prod = await Product.findById(req.params.id);
        res.send(prod);
    } catch {
        res.status(500).send("Product does not exist");
    }
})

// Create products
// curl -X POST -H"Content-Type:application/json" localhost:5000/api/products/create
router.post("/products/create", async(req, res) => {
    const prod = new Product({
        name: "carrots",
        price: "1.50"
    })
    await prod.save();
    res.send(prod);
})

// Update product 60a77a93bbd46d3a34cec5e7
// curl -X POST -H"Content-Type:application/json" localhost:5000/api/products/update
router.post("/products/update/:id", async(req, res) => {
    try {
        const FIND = { _id: req.params.id };
        const update = { price: "4.50" };
        const prod = await Product.findOneAndUpdate(FIND, update, {
            returnOriginal: false
        })
        await prod.save();

        res.send(`${req.params.id} has been updated with new price of £${update.price}`);
    } catch {
        res.status(500).send("Product does not exist");
    }
})

// Delete product
// curl localhost:5000/api/products/delete
router.get("/products/delete/:id", async(req, res) => {
    try {
        const prod = await Product.findByIdAndDelete(req.params.id);
        res.send(prod);
    } catch {
        res.status(500).send("Product does not exist");
    }
})

module.exports = router;