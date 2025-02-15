import img1 from '../../../assets/SA/6.png';

import React from 'react'

const KnowShrimp6 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">กุ้งแคระดรีมบลู </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Blue Dream Shrimp - Neocaridina davidi var. Blue</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: -</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นของกุ้งแคระดรีมบลู</p>
          <ul className="text-2xl">
            <li>สีฟ้าน้ำเงินเข้มสวยงาม </li>
            <li>เป็นกุ้งที่เลี้ยงง่ายและขยายพันธุ์ได้ดี</li>
            <li>อาหาร: อาหารเม็ดขนาดเล็ก, ไรแดง, หนอนแดง</li>
            <li>ขนาดโตเต็มที่ประมาณ 2-3 ซม.</li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงกุ้งแคระดรีมบลู</p>
          <ul className="text-2xl">
            <li></li>
            <li>✔ อุณหภูมิ: 22-27°C</li>
            <li>✔ ค่า pH: 6.5-7.5</li>
            <li>✔ อาหาร: อาหารเม็ด, ใบหูกวาง, สาหร่าย</li>
            <li>✔การเลี้ยงรวม: เหมาะกับปลาขนาดเล็ก เช่น Guppy, ปลาซิว</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowShrimp6
