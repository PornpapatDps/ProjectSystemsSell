import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShippingDetails = () => {
    const [shippingDetails, setShippingDetails] = useState({ 
        name: "", 
        surname: "", 
        phone: "", 
        houseNumber: "", 
        street: "", 
        postalCode: "", 
        province: "", 
        district: "", 
        subDistrict: "" 
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
        
        // Validation
        if (name === "name" || name === "surname" || name === "province") {
            updatedValue = value.slice(0, 100);
        } else if (name === "phone" || name === "postalCode") {
            updatedValue = value.replace(/[^0-9]/g, "").slice(0, name === "phone" ? 10 : 5);
        } else if (name === "houseNumber") {
            updatedValue = value.slice(0, 10);
        } else if (name === "street" || name === "district" || name === "subDistrict") {
            updatedValue = value.slice(0, 50);
        }
        
        setShippingDetails({ ...shippingDetails, [name]: updatedValue });
    };

    const handleConfirmShipping = () => {
        const { name, surname, phone, houseNumber, street, postalCode, province, district, subDistrict } = shippingDetails;
        if (!name || !surname || !phone || !houseNumber || !street || !postalCode || !province || !district || !subDistrict) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        alert("ข้อมูลการจัดส่งถูกบันทึกเรียบร้อย!");
        navigate("/"); // กลับไปหน้าแรก
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-3xl font-bold text-center mb-6">🚚 กรอกข้อมูลการจัดส่ง</h1>
            
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <label className="block text-lg font-semibold">ชื่อ</label>
                <input type="text" name="name" value={shippingDetails.name} onChange={handleChange} className="w-full p-2 border rounded mt-2" />

                <label className="block text-lg font-semibold mt-4">นามสกุล</label>
                <input type="text" name="surname" value={shippingDetails.surname} onChange={handleChange} className="w-full p-2 border rounded mt-2" />

                <label className="block text-lg font-semibold mt-4">เบอร์โทร</label>
                <input type="tel" name="phone" value={shippingDetails.phone} onChange={handleChange} className="w-full p-2 border rounded mt-2" />

                <label className="block text-lg font-semibold mt-4">บ้านเลขที่</label>
                <input type="text" name="houseNumber" value={shippingDetails.houseNumber} onChange={handleChange} className="w-full p-2 border rounded mt-2" />

                <label className="block text-lg font-semibold mt-4">ถนน / ซอย</label>
                <input type="text" name="street" value={shippingDetails.street} onChange={handleChange} className="w-full p-2 border rounded mt-2" />

                <label className="block text-lg font-semibold mt-4">รหัสไปรษณีย์</label>
                <input type="text" name="postalCode" value={shippingDetails.postalCode} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
                
                <label className="block text-lg font-semibold mt-4">จังหวัด</label>
                <input type="text" name="province" value={shippingDetails.province} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
                
                <label className="block text-lg font-semibold mt-4">เขต / อำเภอ</label>
                <input type="text" name="district" value={shippingDetails.district} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
                
                <label className="block text-lg font-semibold mt-4">แขวง / ตำบล</label>
                <input type="text" name="subDistrict" value={shippingDetails.subDistrict} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
                
                <button onClick={handleConfirmShipping} className="mt-6 px-6 py-2 bg-green-600 text-white rounded text-xl w-full">
                    ✅ ยืนยันข้อมูลจัดส่ง
                </button>
            </div>
        </div>
    );
};

export default ShippingDetails;
