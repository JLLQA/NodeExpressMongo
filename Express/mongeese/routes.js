const express = require("express");
const router = express.Router();

const Product = require("./models/product");

// Get all products
router.get("/products", async(req, res) => {
    const prod = await Product.find();
    res.send(prod);
})

// Get one products
router.get("/products/one", async(req, res) => {
    try {
        const prod = await Product.findById("60a677d574c4172c5c94fbe3");
        res.send(prod);
    } catch {
        res.status(500).send("Product does not exist");
    }
})

// Create products
router.post("/products", async(req, res) => {
    const prod = new Product({
        name: "carrots",
        price: "1.50"
    })
    await prod.save();
    res.send(prod);
})

// Update product
router.post("/products/update", async(req, res) => {
    const FIND = { _id: "60a677d574c4172c5c94fbe3" };
    const update = { price: "2.20" };
    const prod = await Product.findOneAndUpdate(FIND, update, {
        returnOriginal: false
    })

    await prod.save();
    res.send(prod);
})

// Delete product
router.get("/products/delete", async(req, res) => {
    try {
        const prod = await Product.findByIdAndDelete("60a677d574c4172c5c94fbe3");
        res.send(prod);
    } catch {
        res.status(500).send("Product does not exist");
    }
})

module.exports = router;