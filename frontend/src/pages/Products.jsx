import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(() => setError("Failed to load products"));
    }, []);

    if (error) return <p className="error-message">{error}</p>;
    if (!products.length) return <p className="loading-message">Loading...</p>;

    return (
        <div className="products-container">
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
