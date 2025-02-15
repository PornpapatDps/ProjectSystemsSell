import img1 from '../../../assets/SA/14.png';

import React from 'react'

const KnowFish6 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลาซิวฟ้า </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Blue Rasbora - Rasbora pauciperforata</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: ไทย, มาเลเซีย, อินโดนีเซีย</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นปลาซิวฟ้า</p>
          <ul className="text-2xl">
          
            <li>ลำตัวสีฟ้าน้ำเงินสว่าง มีแถบเหลือง-เขียวจาง ๆ </li>
            <li>ครีบใสหรือมีสีส้มจาง ๆ</li>
            <li>เป็นปลาที่เลี้ยงง่ายและเข้ากับปลาชนิดอื่นได้ดี</li>
            <li> </li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลาซิวฟ้า</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 10-15 แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 24-28°C</li>
            <li>✔ ค่า pH: 6.0-7.5</li>
            <li>✔ อาหาร: อาหารเม็ด, อาหารแช่แข็ง, <br/>หนอนแดง, ไรแดง</li>
            <li>✔การเลี้ยงรวม: อยู่ร่วมกับ <br/>Tetra, Guppy, กุ้งแคระ, หอยน้ำจืด</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish6
