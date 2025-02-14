import React, { createContext, useState, useContext, useEffect } from "react";

// สร้าง Context
const CartContext = createContext();

// Hook ใช้เพื่อดึงข้อมูล Cart
export const useCart = () => {
    return useContext(CartContext);
};

// สร้าง Provider สำหรับ Cart
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // โหลดข้อมูลตะกร้าจาก localStorage ถ้ามี
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const shippingCost = 150; // ค่าจัดส่งคงที่

    // อัปเดต localStorage เมื่อ cartItems เปลี่ยน
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // ฟังก์ชันช่วยแปลงราคาเป็นตัวเลข
    const parsePrice = (price) => {
        return parseFloat(price.toString().replace("฿", "")) || 0;
    };

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
                item.id === id
                    ? { ...item, quantity: quantity > 0 ? quantity : 1 }
                    : item
            )
        );
    };

    // คำนวณราคาสินค้ารวม (ยังไม่รวมค่าจัดส่ง)
    const getSubtotal = () => {
        return cartItems.reduce(
            (acc, item) => acc + parsePrice(item.price) * item.quantity,
            0
        );
    };

    // คำนวณราคารวม (รวมค่าจัดส่ง)
    const getTotalPrice = () => {
        const subtotal = getSubtotal();
        return cartItems.length > 0 ? subtotal + shippingCost : 0;
    };

    // ล้างตะกร้าทั้งหมด
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart"); // ลบจาก localStorage ด้วย
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                getSubtotal,
                getTotalPrice,
                clearCart,
                shippingCost
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
