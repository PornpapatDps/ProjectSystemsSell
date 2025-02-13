import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from "../../assets/SA/f1.png";
import Image2 from "../../assets/SA/f3.png";
import Image3 from "../../assets/SA/f2.png";
import Image4 from "../../assets/SA/f4.png";
import Image5 from "../../assets/SA/f5.png";
import Image6 from "../../assets/SA/f6.png";
import Image7 from "../../assets/SA/f7.png";
import Image8 from "../../assets/SA/f8.png";
import Button from "../Shared/Button";

const ShopFish = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white p-5 w-full overflow-hidden font-[Kanit]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        🐟 เมนูเลือกประเภทปลาสวยงาม
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-10">
        ปลาสวยงามเป็นสัตว์เลี้ยงยอดนิยมที่ช่วยเพิ่มความสวยงามให้กับตู้ไม้น้ำ 
        แต่ละชนิดมีเอกลักษณ์เฉพาะตัว และความต้องการในการดูแลที่แตกต่างกัน
      </p>

      {/* 🐠 Section 1: Grid Layout สำหรับปลาสวยงาม */}
      <div className='py-3'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-5 gap-4 font-[Kanit]'>
          {/* first-col */}
          <div className=' py-10 pl-5 bg-gradient-to-br from-black/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-700'>ปลาน้ำจืด</p>
                <p className='text-2xl font-semibold mb-[2px]'>นีออน</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Neon Tetra</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image5} alt="" className='w-[2500px] h-[200px] absolute -right-20 lg:buttom-[2px]' />
          </div>
          {/* second-col */}
          <div className='py-10 pl-8 bg-gradient-to-br from-brandBlue/90 to-brandGreen/90
           text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>ฟ้า</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Blue Neon Rasbora</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image6} alt="" className='w-[350px] h-[250px] absolute -right-9 lg:top-[8px] ' />
          </div>
          {/* third-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>ปลาเรนโบว์</p>
                <p className='text-2xl font-semibold mb-[2px]'>นีออนสั้น</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Short Body Neon Rainbow</p>
                <Button
                  text="Browser"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image7} alt="" className='w-[300px] h-[250px] absolute -right-2 lg:top-[10px]' />
          </div>
          {/* fourth-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>ปลาน้ำจืด</p>
                <p className='text-2xl font-semibold mb-[2px]'>คาร์ดินัลเผือก</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Albino Cardinal Tetra</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image8} alt="" className='w-[300px] h-[250px] absolute -right-5 lg:top-[30px]' />
          </div>
        </div>
      </div>
    </div>

      {/* 🐟 Section 2: Grid Layout เพิ่มเติม */}
      <div className='py-3'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-5 gap-4 font-[Kanit]'>
          {/* first-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>ไบจิเต้ </p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Bajite Rasbora</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image1} alt="" className='w-[400px] h-[300px] absolute -right-16 lg:top-[10px]' />
          </div>
          {/* second-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>เพชรน้อย</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Diamond Rasbora</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlues"}
                />
              </div>
            </div>
            <img src={Image3} alt="" className='w-[400px] h-[300px] absolute -right-16 lg:top-[10px] ' />
          </div>
          {/* third-col */}
          <div className=' py-10 pl-5 bg-gradient-to-br from-brandBlues/90 to-primary/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div >
              <div className=' mb-4'>
                <p className=' text-white'>ปลาน้ำจืด</p>
                <p className='text-2xl font-semibold mb-[2px]'>คาร์ดินัล</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20'>Cardinal Tetra</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image4} alt="" className='w-[300px] h-[250px] absolute -right-5 lg:top-[10px] ' />
          </div>
          {/* fours-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90 to-brandBlues/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div >
              <div className=' mb-4'>
                <p className=' text-white'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>กาแล็คซี่ </p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20'>Galaxy Rasbora</p>
                <Button
                  text="Browser"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image2} alt="" className='w-[450px] h-[250px] absolute -right-5 lg:top-[40px] ' />
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  );
};

export default ShopFish;
