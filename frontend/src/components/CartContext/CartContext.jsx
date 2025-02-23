import { createContext, useState, useContext, useEffect } from "react";

// สร้าง Context
const CartContext = createContext();

// Hook ใช้เพื่อดึงข้อมูล Cart
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    return useContext(CartContext);
};

// โหลดตะกร้าจาก localStorage อย่างปลอดภัย
const getSavedCart = () => {
    try {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return [];
    }
};

// สร้าง Provider สำหรับ Cart
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getSavedCart);
    const shippingCost = 150; // ค่าจัดส่งคงที่

    // อัปเดต localStorage เมื่อ cartItems เปลี่ยน
    useEffect(() => {
        try {
            if (cartItems.length > 0) {
                localStorage.setItem("cart", JSON.stringify(cartItems));
            } else {
                localStorage.removeItem("cart");
            }
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    }, [cartItems]);

    // ฟังก์ชันช่วยแปลงราคาเป็นตัวเลข
    const parsePrice = (price) => {
        if (typeof price === "string") {
            return parseFloat(price.replace(/[^\d.]/g, "")) || 0;
        }
        return parseFloat(price) || 0;
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

    // อัปเดตจำนวนสินค้า (ป้องกันค่าติดลบ)
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
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
        try {
            localStorage.removeItem("cart");
        } catch (error) {
            console.error("Error clearing cart from localStorage:", error);
        }
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
