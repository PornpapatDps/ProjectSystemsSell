import React, { createContext, useState, useContext } from "react";

// สร้าง Context
const CartContext = createContext();

// Hook ใช้เพื่อดึงข้อมูล Cart
export const useCart = () => {
    return useContext(CartContext);
};

// สร้าง Provider สำหรับ Cart
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // เพิ่มสินค้าเข้า Cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // ลบสินค้าออกจาก Cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // อัปเดตจำนวนสินค้า
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
