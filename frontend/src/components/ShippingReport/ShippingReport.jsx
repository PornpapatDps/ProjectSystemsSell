import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const ShippingReport = () => {
  const [shippingData, setShippingData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    console.log("📦 ข้อมูลที่โหลดมา:", storedOrders);

    // ดึงวันที่ปัจจุบันในรูปแบบ YYYY-MM-DD
    const todayDate = new Date().toISOString().split("T")[0];

    // อัปเดตสถานะออเดอร์
    const updatedOrders = storedOrders.map((order) => {
      let status = order.status || "กำลังเตรียมสินค้า"; // ถ้ายังไม่มีสถานะ กำหนดเป็น "กำลังเตรียมสินค้า"

      // ถ้ามีวันที่จัดส่ง
      if (order.shippingDate) {
        if (order.shippingDate === todayDate) {
            status = "กำลังเตรียมสินค้า"; // ถ้าวันที่ตรงกับวันนี้ ให้เป็น "กำลังเตรียมสินค้า"
          }
        else if (order.shippingDate > todayDate) {
          status = "กำลังจัดส่ง"; // ถ้าวันที่ตรงกับวันนี้ ให้เป็น "กำลังจัดส่ง"
        } else if (order.shippingDate < todayDate) {
          status = "จัดส่งสำเร็จ"; // ถ้าวันที่เป็นอดีต ให้เป็น "จัดส่งสำเร็จ"
        }
      }

      return { ...order, status };
    });

    setShippingData(updatedOrders);
  }, []);

  // กรองข้อมูลตามหมายเลขติดตาม, หมายเลขออเดอร์ หรือสถานะ
  const filteredData = shippingData.filter((item) =>
    item.trackingNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
      <h1 className="text-3xl font-bold text-center mb-6">🚚 รายงานการจัดส่งสินค้า</h1>

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        {/* ค้นหาข้อมูล */}
        <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2 mb-4">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="🔍 ค้นหาหมายเลขติดตาม, ออเดอร์ หรือสถานะ..."
            className="w-full p-2 outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ตารางแสดงข้อมูล */}
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3 border dark:border-gray-600">หมายเลขออเดอร์</th>
              <th className="p-3 border dark:border-gray-600">หมายเลขติดตาม</th>
              <th className="p-3 border dark:border-gray-600">ชื่อผู้รับ</th>
              <th className="p-3 border dark:border-gray-600">บริษัทขนส่ง</th>
              <th className="p-3 border dark:border-gray-600">สถานะ</th>
              <th className="p-3 border dark:border-gray-600">วันที่จัดส่ง</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{item.orderId}</td>
                  <td className="p-3 border dark:border-gray-600">{item.trackingNumber || "ไม่มีข้อมูล"}</td>
                  <td className="p-3 border dark:border-gray-600">{item.name}</td>
                  <td className="p-3 border dark:border-gray-600">{item.shippingCarrier || "ไม่มีข้อมูล"}</td>
                  <td className={`p-3 border dark:border-gray-600 font-bold 
                    ${item.status === "กำลังเตรียมสินค้า" ? "text-yellow-500" :
                      item.status === "กำลังจัดส่ง" ? "text-blue-500" :
                      item.status === "จัดส่งสำเร็จ" ? "text-green-500" : "text-red-500"
                    }`}>
                    {item.status}
                  </td>
                  <td className="p-3 border dark:border-gray-600">{item.shippingDate || "รอการจัดส่ง"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500 dark:text-gray-400">
                  ❌ ไม่พบข้อมูล
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShippingReport;
