import  { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import qrCode from "../../assets/SA/example_qr.png";

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const [slip, setSlip] = useState(null);
    const navigate = useNavigate();

    // ค่าจัดส่งคงที่
    const shippingFee = 150;

    // คำนวณยอดรวมสินค้า
    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace("฿", "")) * item.quantity, 0);

    // ยอดรวมทั้งหมด (รวมค่าจัดส่ง)
    const totalAmount = subtotal + shippingFee;

    // ฟังก์ชันเลือกไฟล์สลิป
    const handleFileChange = (e) => {
        setSlip(e.target.files[0]);
    };

    // ฟังก์ชันยืนยันการชำระเงิน
    const handleConfirmPayment = () => {
        if (!slip) {
            alert("กรุณาอัปโหลดสลิปการโอนเงิน");
            return;
        }
        alert("การชำระเงินสำเร็จ! กรุณากรอกข้อมูลการจัดส่ง");
        navigate("/shipping-details"); // เปลี่ยนเส้นทางไปยังหน้า Shipping Details
        clearCart();
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-3xl font-bold text-center mb-6">💳 ชำระเงิน</h1>

            {/* รายการสินค้า */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">🛍 รายการสินค้า</h2>
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between border-b py-2">
                        <span>{item.title} x {item.quantity}</span>
                        <span>฿{parseFloat(item.price.replace("฿", "")) * item.quantity}</span>
                    </div>
                ))}
                <h2 className="text-2xl font-bold mt-4">💰 ยอดรวมสินค้า: ฿{subtotal}</h2>
                <h2 className="text-2xl font-bold mt-2">🚚 ค่าจัดส่ง: ฿{shippingFee}</h2>
                <h2 className="text-3xl font-bold mt-4 text-green-400">💵 ยอดรวมทั้งหมด: ฿{totalAmount}</h2>
            </div>

            {/* เลือกช่องทางการชำระเงิน */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
                <h2 className="text-2xl font-semibold mb-4">🔍 เลือกช่องทางการชำระเงิน</h2>
                <div className="flex gap-4">
                    <button onClick={() => setPaymentMethod("bank")} className={`px-4 py-2 rounded ${paymentMethod === "bank" ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>โอนผ่านธนาคาร</button>
                    <button onClick={() => setPaymentMethod("qr") } className={`px-4 py-2 rounded ${paymentMethod === "qr" ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>QR Code</button>
                </div>
            </div>

            {/* รายละเอียดช่องทางการชำระเงิน */}
            {paymentMethod === "bank" ? (
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
                    <h2 className="text-2xl font-semibold">🏦 ข้อมูลบัญชีธนาคาร</h2>
                    <p className="text-lg mt-2">ชื่อบัญชี: 88aqua_thailand</p>
                    <p className="text-lg">เลขบัญชี: 123-456-789</p>
                    <p className="text-lg">ธนาคาร: กรุงไทย</p>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
                    <h2 className="text-2xl font-semibold">📌 สแกนเพื่อชำระเงิน</h2>
                    <img src={qrCode} alt="QR Code" className="w-60 mx-auto  " />
                </div>
            )}

            {/* อัปโหลดสลิปโอนเงิน */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6 ">
                <h2 className="text-2xl font-semibold">📎 อัปโหลดสลิปการโอนเงิน</h2>
                <input type="file" accept="image/*" onChange={handleFileChange} className="mt-4" />
            </div>
            
            {/* ปุ่มยืนยันการชำระเงิน */}
            <div className="text-center mt-6">
                <button onClick={handleConfirmPayment} className="px-6 py-2 bg-green-600 text-white rounded text-xl">
                    ✅ ยืนยันการชำระเงิน
                </button>
            </div>
        </div>
    );
};

export default Checkout;
