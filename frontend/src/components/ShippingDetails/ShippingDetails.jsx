import React, { useState } from "react"; //หน้าการจัดส่ง 
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import thaiDistricts from "../data/thaiDistricts";

const ShippingDetails = () => {
    const { cartItems, clearCart } = useCart();
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerNumAddress, setCustomerNumAddress] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [subdistrict, setSubdistrict] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setProvince(selectedProvince);
        setDistrict("");
        setSubdistrict("");
        setZipcode("");
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict);
        setSubdistrict("");
    
        // 🔥 ตรวจสอบว่ามีรหัสไปรษณีย์หรือไม่
        const zipcodeData = thaiDistricts[province]?.zipcodes?.[selectedDistrict] || "";
        setZipcode(zipcodeData);
    };
    

    const handleSubdistrictChange = (e) => {
        setSubdistrict(e.target.value);
    };

    const handleConfirmShipping = () => {
        const requiredFields = [province, district, subdistrict, zipcode, customerName, customerPhone, customerNumAddress, customerAddress];
    
        if (requiredFields.some(field => !field)) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return;
        }
    
        // 🔥 บันทึกข้อมูลการจัดส่งลง LocalStorage
        const shippingDetails = {
            customerName,
            customerPhone,
            customerNumAddress,
            customerAddress,
            province,
            district,
            subdistrict,
            zipcode,
            status: "กำลังเตรียมสินค้า",
            createdAt: new Date().toISOString(),
        };
    
        localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
    
        setStatus("กำลังเตรียมสินค้า");
    
        setTimeout(() => {
            alert("สินค้าของคุณกำลังเตรียมจัดส่ง!");
            navigate("/shipping-report"); // 🔥 เปลี่ยนเส้นทางไปที่หน้ารายงานการจัดส่ง
            clearCart();
        }, 2000);
    };
    

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white font-[Kanit]">
            <h1 className="text-3xl font-bold text-center mb-6">📦 กรอกข้อมูลการจัดส่ง</h1>
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <div className="text-base font-bold">ชื่อ-นามสกุล</div>
                <input type="text" placeholder="📍 ชื่อ-นามสกุล" className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={customerName} maxLength={100} onChange={(e) => {
                    const value = e.target.value;
                    if (/^[A-Za-zก-ฮะ-์\s]*$/.test(value)) setCustomerName(value);
                }} />
                
                <div className="text-base font-bold mt-4">เบอร์โทรศัพท์ </div>
                <input type="text" placeholder="📞 เบอร์โทรศัพท์" className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={customerPhone} maxLength={10} onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) setCustomerPhone(value);
                }} />
                <div className="text-base font-bold mt-4">บ้านเลขที่ </div>
                <input type="text" placeholder="🏠 บ้านเลขที่ (ตัวเลข 5 ตัว และ '/' ได้)" className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={customerNumAddress} maxLength={10} onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,5}\/?\d{0,5}$/.test(value)) setCustomerNumAddress(value);
                }} />
                <div className="text-base font-bold mt-4">ที่อยู่เพิ่มเติม</div>
                <input type="text" placeholder="📍 ที่อยู่เพิ่มเติม (สูงสุด 50 ตัวอักษร)" className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={customerAddress} maxLength={50} onChange={(e) => setCustomerAddress(e.target.value)} />
                <div className="text-base font-bold mt-4">เลือกจังหวัด</div>
                <select className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={province} onChange={handleProvinceChange}>
                    <option value="">เลือกจังหวัด</option>
                    {Object.keys(thaiDistricts).map((prov) => (
                        <option key={prov} value={prov}>{prov}</option>
                    ))}
                </select>
                <div className="text-base font-bold mt-4">เลือกเขต/อำเภอ</div>
                {province && (
                    <select className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={district} onChange={handleDistrictChange}>
                        <option value="">เลือกเขต/อำเภอ</option>
                        {thaiDistricts[province]?.districts.length > 0 
                            ? thaiDistricts[province]?.districts.map((dist) => (
                                <option key={dist} value={dist}>{dist}</option>
                            ))
                            : <option value="">ไม่มีข้อมูล</option>
                        }
                    </select>
                )}
                <div className="text-base font-bold mt-4">เลือกแขวง/ตำบล</div>
                {district && (
                    <select className="w-full p-3 mt-2 border rounded bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={subdistrict} onChange={handleSubdistrictChange}>
                        <option value="">เลือกแขวง/ตำบล</option>
                        {thaiDistricts[province]?.subdistricts[district]?.map((sub) => (
                            <option key={sub} value={sub}>{sub}</option>
                        ))}
                    </select>
                )}
                <div className="text-base font-bold mt-4">รหัสไปรษณีย์</div>
                {district && zipcode && (
                    <input type="text" className="w-full p-3 mt-2 border rounded  bg-gray-100 dark:bg-gray-100 dark:text-gray-600 font-medium" value={zipcode} readOnly />
                )}

            </div>

            {status && (
                <div className="text-center mt-6 text-lg text-blue-600">
                    ⏳ {status}...
                </div>
            )}

            <div className="text-center mt-6">
                <button onClick={handleConfirmShipping} className="px-6 py-2 bg-green-600 text-white rounded text-xl">
                    ✅ ยืนยันข้อมูลการจัดส่ง
                </button>
            </div>
        </div>
    );
};

export default ShippingDetails;
