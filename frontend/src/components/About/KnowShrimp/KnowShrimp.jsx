import img1 from '../../../assets/SA/1.png';

import React from 'react'

const KnowShrimp = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">กุ้งแคระเรด บี รอง </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์:Red Bee Shrimp</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: - </p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่น</p>
          <ul className="text-2xl">
          
            <li>มีลวดลายสีแดง-ขาวที่โดดเด่น</li>
            <li>เป็นกุ้งที่มีระดับเกรด (เช่น S, SS, SSS) ขึ้นอยู่กับความเข้มของสี</li>
            <li>ต้องการน้ำสะอาดมากและค่า pH ต่ำ</li>
            <li></li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงกุ้งแคระเรด บี รอง</p>
          <ul className="text-2xl">
            
            <li>✔ อุณหภูมิ: 20-28°C</li>
            <li>✔ ค่า pH: 5.8-6.8</li>
            <li>✔ อาหาร: อาหารเม็ด, ใบหูกวาง, แคลเซียมเสริม</li>
            <li>✔ การเลี้ยงรวม: อยู่กับกุ้งแคระชนิดอื่นหรือปลาขนาดเล็ก เช่น ปลาซิว, Tetra</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowShrimp
