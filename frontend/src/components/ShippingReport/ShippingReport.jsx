import React, { useEffect, useState } from "react";

const ShippingReport = () => {
    const [shippingInfo, setShippingInfo] = useState(null);

    useEffect(() => {
        const storedShipping = JSON.parse(localStorage.getItem("shippingDetails"));
        setShippingInfo(storedShipping);
    }, []);

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-3xl font-bold text-center mb-6">📦 รายงานการจัดส่ง</h1>
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                {shippingInfo ? (
                    <>
                        <div className="text-lg font-bold">ชื่อผู้รับ: {shippingInfo.customerName}</div>
                        <div className="text-lg">📞 เบอร์โทรศัพท์: {shippingInfo.customerPhone}</div>
                        <div className="text-lg">🏠 บ้านเลขที่: {shippingInfo.customerNumAddress}</div>
                        <div className="text-lg">📍 ที่อยู่: {shippingInfo.customerAddress}</div>
                        <div className="text-lg">🗺 จังหวัด: {shippingInfo.province}</div>
                        <div className="text-lg">🏢 เขต/อำเภอ: {shippingInfo.district}</div>
                        <div className="text-lg">🏡 แขวง/ตำบล: {shippingInfo.subdistrict}</div>
                        <div className="text-lg">📮 รหัสไปรษณีย์: {shippingInfo.zipcode}</div>
                        <div className="text-lg text-blue-500 mt-4">⏳ สถานะ: {shippingInfo.status}</div>

                        {/* 🔥 เพิ่มหมายเลขติดตามพัสดุ */}
                        <div className="text-lg font-bold mt-4">
                            🚚 หมายเลขติดตามพัสดุ:{" "}
                            {shippingInfo.trackingNumber ? (
                                <span className="text-green-500">{shippingInfo.trackingNumber}</span>
                            ) : (
                                <span className="text-red-500">ยังไม่มีหมายเลขติดตาม</span>
                            )}
                        </div>
                    </>
                ) : (
                    <p className="text-center">⏳ ไม่มีข้อมูลการจัดส่ง...</p>
                )}
            </div>
        </div>
    );
};

export default ShippingReport;
