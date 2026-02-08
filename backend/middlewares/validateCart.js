const products = require("../data/products");

module.exports = (req, res, next) => {
    const { productId, quantity } = req.body;

    if(!productId || !quantity) {
        return res.status(400).json({ message: "Product ID and quantity are required" });
    }  

    if (quantity <= 0) {
        return res.status(400).json({ error: "quantity must be greater than zero" });
    }

    const productExists = products.some(p => p.id === productId);
    if (!productExists) {
        return res.status(404).json({ error: "Product not found" });
    }

    next();
}