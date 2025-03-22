import { useEffect, useState } from "react";

const ShippingReport = () => {
    const [shippingReports, setShippingReports] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedData, setEditedData] = useState({ customerName: "", customerAddress: "" });
    const [deleteIndex, setDeleteIndex] = useState(null);

    useEffect(() => {
        const reports = JSON.parse(localStorage.getItem("shippingReports")) || [];
        console.log("📦 โหลดข้อมูลรายงานการจัดส่ง:", reports);
        setShippingReports(reports);
    }, []);

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditedData({
            customerName: shippingReports[index].customerName,
            customerAddress: shippingReports[index].customerAddress,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = (index) => {
        const updatedReports = [...shippingReports];
        updatedReports[index] = {
            ...updatedReports[index],
            customerName: editedData.customerName,
            customerAddress: editedData.customerAddress,
        };

        setShippingReports(updatedReports);
        localStorage.setItem("shippingReports", JSON.stringify(updatedReports));
        setEditingIndex(null);
    };

    const handleDeleteConfirm = () => {
        const updatedReports = shippingReports.filter((_, i) => i !== deleteIndex);
        setShippingReports(updatedReports);
        localStorage.setItem("shippingReports", JSON.stringify(updatedReports));
        setDeleteIndex(null);
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-4xl font-extrabold text-center mb-6">📦 รายงานสถานะการจัดส่ง</h1>

            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow overflow-auto">
                {shippingReports.length > 0 ? (
                    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700 text-lg font-bold">
                                <th className="border border-gray-300 dark:border-gray-600 p-3">หมายเลขออเดอร์</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">ชื่อผู้รับ</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">ที่อยู่</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">จังหวัด</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">สถานะ</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">วันที่สั่งซื้อ</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">จัดการข้อมูล</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shippingReports.map((report, index) => (
                                <tr key={index} className="text-center border border-gray-300 dark:border-gray-700 text-lg">
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">{index + 1}</td>
                                    
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                                        {editingIndex === index ? (
                                            <input
                                                type="text"
                                                name="customerName"
                                                value={editedData.customerName}
                                                onChange={handleInputChange}
                                                className="border border-gray-400 p-1 rounded w-full text-black"
                                            />
                                        ) : (
                                            report.customerName
                                        )}
                                    </td>

                                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                                        {editingIndex === index ? (
                                            <input
                                                type="text"
                                                name="customerAddress"
                                                value={editedData.customerAddress}
                                                onChange={handleInputChange}
                                                className="border border-gray-400 p-1 rounded w-full text-black"
                                            />
                                        ) : (
                                            report.customerAddress
                                        )}
                                    </td>

                                    <td className="border border-gray-300 dark:border-gray-600 p-3">{report.province}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">{report.status}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">{report.shippingDate}</td>
                                    
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 flex gap-2 justify-center">
                                        {editingIndex === index ? (
                                            <>
                                                <button
                                                    onClick={() => handleSave(index)}
                                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                                >
                                                    บันทึก
                                                </button>
                                                <button
                                                    onClick={() => setEditingIndex(null)}
                                                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                                                >
                                                    ยกเลิก
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleEdit(index)}
                                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                                                >
                                                    แก้ไข
                                                </button>
                                                <button
                                                    onClick={() => setDeleteIndex(index)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                                >
                                                    ลบ
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">⏳ ไม่มีข้อมูลการคำสั่งซื้อ...</p>
                )}
            </div>

            {/* Modal ยืนยันการลบ */}
            {deleteIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">⚠️ ยืนยันการลบ</h2>
                        <p className="mb-4">คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleDeleteConfirm}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                ลบ
                            </button>
                            <button
                                onClick={() => setDeleteIndex(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                            >
                                ยกเลิก
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShippingReport;
