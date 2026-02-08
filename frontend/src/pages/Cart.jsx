import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-container">
                <h2 className="cart-empty">Your cart is empty</h2>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Cart</h2>

            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-image"
                        />

                        <div className="cart-item-details">
                            <h4 className="cart-item-name">{item.name}</h4>
                            <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                        </div>

                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                                updateQuantity(item.id, Number(e.target.value))
                            }
                            className="cart-item-quantity"
                        />

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="cart-item-remove-btn"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3 className="cart-total">
                    <span className="cart-total-label">Total:</span>
                    <span className="cart-total-amount">
                        ₹{cart.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                        ).toLocaleString()}
                    </span>
                </h3>
            </div>
        </div>
    );
}
