import img1 from '../../../assets/SA/12.png';

import React from 'react'

const KnowFish4 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลาคาดินัล </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Cardinal Tetra - Paracheirodon axelrodi</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: อเมซอน (บราซิล, โคลอมเบีย, เวเนซุเอลา)</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นปลาคาดินัล</p>
          <ul className="text-2xl">
            <li>ลำตัวสีฟ้า-แดงแวววาวตลอดแนว</li>
            <li>ว่ายน้ำเป็นฝูงสวยงาม</li>
            <li>ต้องการน้ำสะอาดและการดูแลอย่างดี</li>
            <li></li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลาคาดินัล</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 20 แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 23-27°C</li>
            <li>✔ ค่า pH:  5.0-7.0</li>
            <li>✔ อาหาร: อาหารเม็ด, หนอนแดง, อาหารแช่แข็ง</li>
            <li>✔ การเลี้ยงรวม:  เหมาะกับปลาซิว, กุ้งแคระ, หอยน้ำจืด</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish4
