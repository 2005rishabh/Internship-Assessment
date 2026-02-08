const express = require("express");
const router = express.Router();
const validateCart = require("../middlewares/validateCart");

let cart = [];

router.post("/", validateCart, (req, res) => {
    const { productId, quantity } = req.body;

    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }

    res.status(201).json({ 
        message: "Product added to cart" ,
        cart   
    });
}); 

module.exports = router;