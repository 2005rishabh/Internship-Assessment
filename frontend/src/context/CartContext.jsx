import { createContext, useContext, useState } from "react";
import { addToCartAPI } from "../services/api";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = async (product) => {
        try {
            await addToCartAPI(product.id, 1);

            setCart(prev => {
                const existing = prev.find(item => item.id === product.id);
                if (existing) {
                    return prev.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prev, { ...product, quantity: 1 }];
            });
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    };

    const updateQuantity = (id, quantity) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
