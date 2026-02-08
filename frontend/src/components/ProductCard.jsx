import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-card-image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-image"
                />
            </div>
            <div className="product-card-content">
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-price">₹{product.price.toLocaleString()}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="product-card-button"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
