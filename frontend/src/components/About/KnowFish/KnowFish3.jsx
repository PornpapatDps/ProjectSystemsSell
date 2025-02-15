import img1 from '../../../assets/SA/11.png';

import React from 'react'

const KnowFish3 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลาซิวกาแล็คซี่  </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Galaxy Rasbora </p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: เมียนมา</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นของปลาซิวกาแล็คซี่</p>
          <ul className="text-2xl">
            <li>ขนาดโตเต็มที่ประมาณ 2-2.5 ซม.</li>
            <li>ลำตัวมีลวดลายจุดคล้ายดวงดาวบนท้องฟ้า</li>
            <li>สีพื้นออกน้ำเงินเข้มหรือเขียว</li>
            <li>ครีบสีแดงสด มีลวดลายขีดดำบาง ๆ</li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลาซิวกาแล็คซี่</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 10แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 22-26°C</li>
            <li>✔ ค่า pH: 6.5-7.5</li>
            <li>✔ อาหาร: อาหารเม็ดขนาดเล็ก, ไรแดง, หนอนแดง</li>
            <li>✔ การเลี้ยงรวม: เหมาะกับกุ้งแคระ, หอยน้ำจืด, ปลาเล็กอื่น ๆ</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish3
