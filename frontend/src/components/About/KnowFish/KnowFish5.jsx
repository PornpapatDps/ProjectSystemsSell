import img1 from '../../../assets/SA/13.png';

import React from 'react'

const KnowFish5 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลานีออน </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Neon Tetra - Paracheirodon innesi</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: อเมริกาใต้</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นปลานีออน</p>
          <ul className="text-2xl">
            <li>ขนาดโตเต็มที่ประมาณ 4-6 ซม.</li>
            <li>ลำตัวสีเงินอมทอง มีเส้นสีดำบางๆ พาดตามแนวยาวของลำตัว</li>
            <li>ครีบใส อาจมีสีเหลืองอ่อนหรือส้มจางๆ</li>
            <li>ว่ายน้ำอย่างสงบ และมีพฤติกรรมคล้ายปลาซิวชนิดอื่นๆ</li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลานีออน</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 10-15 แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 22-26°C</li>
            <li>✔ ค่า pH: 5.5-7.5</li>
            <li>✔ อาหาร: อาหารเม็ด, หนอนแดง, อาหารแช่แข็ง</li>
            <li>✔ การเลี้ยงรวม: อยู่ร่วมกับปลาซิว, Tetra อื่น ๆ, กุ้งแคระ</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish5
