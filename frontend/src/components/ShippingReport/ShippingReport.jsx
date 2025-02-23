import  { useEffect, useState } from "react";

const ShippingReport = () => {
    const [shippingReports, setShippingReports] = useState([]);
     useState({
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
        title:"",
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


    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-4xl font-extrabold text-center mb-6">📦 รายงานสถานะการจัดส่ง</h1>
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow overflow-x-auto  ">
                {shippingReports.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700 text-xl font-bold">
                                <th className="border border-gray-300 dark:border-gray-600 p-2 ">หมายเลขออเดอร์</th>
                                {/* <th className="border border-gray-300 dark:border-gray-600 p-2">สินค้า</th> */}
                                <th className="border border-gray-300 dark:border-gray-600 p-2">ชื่อผู้รับ</th>
                                
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
                                    {/* <td className="border border-gray-300 dark:border-gray-600 p-2">{report.title}</td> */}
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


        </div>
    );
};

export default ShippingReport;
