const API_BASE_URL = "http://localhost:5000";

export async function fetchProducts() {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export async function addToCartAPI(productId, quantity) {
    const res = await fetch(`${API_BASE_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity })
    });

    if (!res.ok) {
        throw new Error("Failed to add to cart");
    }

    return res.json();
}
