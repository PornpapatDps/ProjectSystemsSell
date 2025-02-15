import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const OrderConfirmation = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    if (orderDetails) {
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  
      // ตรวจสอบว่าออเดอร์มีอยู่แล้วหรือไม่
      const isOrderExists = existingOrders.some(order => order.orderId === orderDetails.orderId);
  
      if (!isOrderExists) {
        // สุ่มหมายเลขติดตาม และบริษัทขนส่ง ถ้ายังไม่มี
        const trackingNumber = orderDetails.trackingNumber || "TRK" + Math.floor(100000 + Math.random() * 900000);
        const shippingCompanies = ["Kerry Express", "Flash Express", "ไปรษณีย์ไทย"];
        const selectedCarrier = orderDetails.shippingCarrier || shippingCompanies[Math.floor(Math.random() * shippingCompanies.length)];
  
        const newOrder = {
          ...orderDetails,
          status: "กำลังเตรียมสินค้า",
          trackingNumber,
          shippingCarrier: selectedCarrier,
          shippingDate: "รอการจัดส่ง",
          createdAt: new Date().toISOString(),
        };
  
        const updatedOrders = [...existingOrders, newOrder];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
      }
    }
  }, [orderDetails]);
  

  const handleConfirmOrder = () => {
    alert("✅ คำสั่งซื้อของคุณได้รับการยืนยันแล้ว!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center text-green-500">🎉 คำสั่งซื้อสำเร็จ!</h1>
        <div className="mt-6 bg-gray-200 dark:bg-gray-700 p-4 rounded text-center text-xl font-bold">
          หมายเลขออเดอร์ของคุณ: <span className="text-primary">{orderDetails?.orderId}</span>
        </div>

        <div className="text-center mt-6">
          <button onClick={handleConfirmOrder} className="px-6 py-3 bg-green-600 text-white rounded text-xl">
            ✅ ยืนยันคำสั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
