import React, { useEffect, useState } from "react";

const ShippingReport = () => {
    const [shippingReports, setShippingReports] = useState([]);
  
    useEffect(() => {
        const reports = JSON.parse(localStorage.getItem("shippingReports")) || [];
        console.log("Loaded shipping reports:", reports); // Debug log to check if data is loading
        setShippingReports(reports);
      }, []);
      
  
    return (
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
        <h1 className="text-3xl font-bold text-center mb-6">📦 รายงานคำสั่งซื้อ</h1> {/* เปลี่ยนจาก "รายงานการคำสั่งซื้อ" เป็น "รายงานคำสั่งซื้อ" */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        {shippingReports.length > 0 ? (
  shippingReports.map((report, index) => (
    <div key={index} className="mb-6">
      <div className="text-lg font-bold">หมายเลขออเดอร์: {index + 1}</div> {/* Sequential order number */}
      <div className="text-lg">ชื่อผู้รับ: {report.customerName}</div>
      <div className="text-lg">ที่อยู่: {report.customerAddress}</div>
      <div className="text-lg">หมายเลขติดตาม: {report.trackingNumber}</div>
      <div className="text-lg">บริษัทขนส่ง: {report.shippingCarrier}</div>
      <div className="text-lg">สถานะ: {report.status}</div>
      <div className="text-lg">วันที่สั่งซื้อ: {report.shippingDate}</div> {/* Display the shipping date */}
      <div className="text-lg">-------------------------------------------</div>
    </div>
  ))
) : (
  <p className="text-center">⏳ ไม่มีข้อมูลการคำสั่งซื้อ...</p> 
)}





        </div>
      </div>
    );
};

export default ShippingReport;
