import React, { useEffect, useState } from "react";

const ShippingReport = () => {
    const [shippingReports, setShippingReports] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedReport, setEditedReport] = useState({
        customerName: "",
        trackingNumber: "",
        customerAddress: "",
        province: "",
        thaiDistricts: "",
        districts: "",
        subdistrict: "",
        zipcode: "",
        shippingCarrier: "",
        status: "",
        shippingDate: "",
    });

    useEffect(() => {
        const reports = JSON.parse(localStorage.getItem("shippingReports")) || [];
        console.log("Loaded shipping reports:", reports); // Debug log to check if data is loading
        setShippingReports(reports);
    }, []);

    const handleDelete = (index) => {
        const updatedReports = shippingReports.filter((_, i) => i !== index);
        setShippingReports(updatedReports);
        localStorage.setItem("shippingReports", JSON.stringify(updatedReports));
    };

    const handleEdit = (index) => {
        const reportToEdit = shippingReports[index];
        setEditedReport(reportToEdit);
        setEditIndex(index);
    };

    const handleSaveEdit = () => {
        const updatedReports = [...shippingReports];
        updatedReports[editIndex] = editedReport;
        setShippingReports(updatedReports);
        localStorage.setItem("shippingReports", JSON.stringify(updatedReports));
        setEditIndex(null);  // Reset the edit state
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedReport({ ...editedReport, [name]: value });
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-4xl font-extrabold text-center mb-6">📦 รายงานคำสั่งซื้อ</h1>
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow overflow-x-auto  ">
                {shippingReports.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700 text-xl font-bold">
                                <th className="border border-gray-300 dark:border-gray-600 p-2 ">หมายเลขออเดอร์</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">ชื่อผู้รับ</th>
                                {/* <th className="border border-gray-300 dark:border-gray-600 p-2">หมายเลขพัสดุ</th> */}
                                <th className="border border-gray-300 dark:border-gray-600 p-2">ที่อยู่</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">จังหวัด</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">เขต</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">แขวง</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">รหัสไปรษณีย์</th>
                                {/* <th className="border border-gray-300 dark:border-gray-600 p-2">บริษัทขนส่ง</th> */}
                                <th className="border border-gray-300 dark:border-gray-600 p-2">สถานะ</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">วันที่สั่งซื้อ</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">จัดการข้อมูล</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shippingReports.map((report, index) => (
                                <tr key={index} className="text-center border border-gray-300 dark:border-gray-700 text-lg">
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{index + 1}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.customerName}</td>
                                    {/* <td className="border border-gray-300 dark:border-gray-600 p-2">{report.trackingNumber}</td> */}
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.customerAddress}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.province}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.district}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.subdistrict}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.zipcode}</td>
                                    {/* <td className="border border-gray-300 dark:border-gray-600 p-2">{report.shippingCarrier}</td> */}
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.status}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{report.shippingDate}</td>
                                    
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">
                                        
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                                        >
                                            ลบ
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">⏳ ไม่มีข้อมูลการคำสั่งซื้อ...</p>
                )}
            </div>

            {editIndex !== null && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-96">
                        <h2 className="text-2xl font-bold mb-4 text-center">แก้ไขรายงานคำสั่งซื้อ</h2>
                        <div>
                            <label className="block mb-2  border-gray-300 dark:border-gray-600 font-bold text-lg ">ชื่อผู้รับ</label>
                            <input
                                type="text"
                                name="customerName"
                                value={editedReport.customerName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-200 rounded mb-4 bg:white dark:bg-gray-800 dark:text-white font-semibold text-base"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold text-lg">ที่อยู่</label>
                            <input
                                type="text"
                                name="customerAddress"
                                value={editedReport.customerAddress}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 bg:white dark:bg-gray-800 dark:text-white font-semibold text-base"
                            />
                        </div>
                        
                        <div>
                            <label className="block mb-2 font-bold text-lg">เขต</label>
                            <input
                                type="text"
                                name="district"
                                value={editedReport.district}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 bg:white dark:bg-gray-800 dark:text-white font-semibold text-base"
                            />
                        </div>
                        
                        <div>
                            <label className="block mb-2 font-bold text-lg">แขวง</label>
                            <input
                                type="text"
                                name="subdistrict"
                                value={editedReport.subdistrict}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 bg:white dark:bg-gray-800 dark:text-white font-semibold text-base"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold text-lg">จังหวัด</label>
                            <input
                                type="text"
                                name="province"
                                value={editedReport.province}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 bg:white dark:bg-gray-800 dark:text-white font-semibold text-base"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold text-lg">รหัสไปรษณีย์</label>
                            <input
                                type="text"
                                name="zipcode"
                                value={editedReport.zipcode}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 bg:white dark:bg-gray-800 dark:text-white font-semibold text-base"
                            />
                        </div>
                        
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShippingReport;
