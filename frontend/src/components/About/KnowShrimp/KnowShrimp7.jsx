import img1 from '../../../assets/SA/7.png';

import React from 'react'

const KnowShrimp7 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">กุ้งแคระซูชิแดง </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Red Sakura Shrimp</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: -</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นของกุ้งแคระซูชิแดง</p>
          <ul className="text-2xl">
            <li>สีแดงสดใสทั่วทั้งตัว</li>
            <li>เป็นกุ้งที่เลี้ยงง่ายกว่ากุ้งเรดบี</li>
            <li>ขยายพันธุ์ได้ดีในตู้ปลา</li>
            <li></li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงกุ้งซูชิแดง</p>
          <ul className="text-2xl">
            <li></li>
            <li>✔ อุณหภูมิ: 22-28°C</li>
            <li>✔ ค่า pH: 6.5-7.5</li>
            <li>✔ อาหาร: อาหารกุ้ง, ใบหูกวาง, แคลเซียมเสริม</li>
            <li>✔ การเลี้ยงรวม: เหมาะกับกุ้งแคระอื่น ๆ และปลาขนาดเล็ก</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowShrimp7
