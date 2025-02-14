import React from "react";
import { useCart } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, getSubtotal, getTotalPrice, shippingCost } = useCart();

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-3xl font-bold text-center mb-6">🛒 ตะกร้าสินค้า</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">ยังไม่มีสินค้าในตะกร้า</p>
            ) : (
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b py-4">
                            <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300">{item.price} x {item.quantity}</p>
                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-l"
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-r"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                ❌
                            </button>
                        </div>
                    ))}

                    <div className="mt-6 text-right">
                        <p className="text-lg">ค่าสินค้ารวม: ฿{getSubtotal()}</p>
                        <p className="text-lg">ค่าจัดส่ง: ฿{cartItems.length > 0 ? shippingCost : 0}</p>
                        <h2 className="text-2xl font-bold mt-2">รวมทั้งหมด: ฿{getTotalPrice()}</h2>

                        <Link to="/checkout" className="inline-block mt-3 px-6 py-2 bg-primary text-white rounded">
                            ชำระเงิน
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
