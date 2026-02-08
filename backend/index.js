const express = require("express");
require("dotenv").config();

const cors = require("cors");
const cartRouter = require("./routes/cart");
const productsRouter = require("./routes/products");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})