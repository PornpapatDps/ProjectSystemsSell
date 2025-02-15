import img1 from '../../../assets/SA/16.png';

import React from 'react'

const KnowFish8 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
         
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลาเรนโบว์นีออนสั้น </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์:Dwarf Neon Rainbowfish - Melanotaenia praecox</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: ปาปัวนิวกินี</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นปลาเรนโบว์นีออนสั้น</p>
          <ul className="text-2xl">
            <li>ลำตัวมีประกายสีฟ้าและแวววาว</li>
            <li>ครีบสีแดงสดหรือน้ำเงินเข้ม</li>
            <li>ว่ายน้ำอย่างกระฉับกระเฉงและต้องการพื้นที่ว่ายเยอะ</li>
            <li></li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลาเรนโบว์นีออนสั้น</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 20 แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 24-28°C</li>
            <li>✔ ค่า pH: 6.5-7.5</li>
            <li>✔ อาหาร: อาหารเม็ด,หนอนแดง, ไรแดง</li>
            <li>✔ การเลี้ยงรวม: อยู่ร่วมกับปลานีออน, ปลาซิว, Guppy</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish8
