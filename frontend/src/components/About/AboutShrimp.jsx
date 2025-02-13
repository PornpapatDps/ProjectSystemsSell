import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from "../../assets/SA/RedB.png";
import Image2 from "../../assets/SA/SushiOrange.png";
import Image3 from "../../assets/SA/Yamato.png";
import Image4 from "../../assets/SA/blue.png";
import Image5 from '../../assets/SA/Snow.png';
import Image6 from '../../assets/SA/SushiRed.png';
import Image7 from '../../assets/SA/Yellow.png';
import Image8 from '../../assets/SA/Red.png';
import Button from "../Shared/Button";



const AboutShrimp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white p-5 font-[Kanit]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        🦐 ความรู้เกี่ยวกับกุ้งแคระ
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-6">
        กุ้งแคระเป็นสัตว์น้ำยอดนิยมสำหรับตู้ไม้น้ำ มีหลากหลายสายพันธุ์ที่มีสีสันและลวดลายที่สวยงาม
        แต่ละชนิดมีเอกลักษณ์และความต้องการที่แตกต่างกัน
      </p>
      {/* fist section card */}
      <div className='py-2'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-5 gap-4 font-[Kanit]'>
          {/* first-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-700'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>ซูชิส้ม </p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Sushi Orange </p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image2} alt="" className='w-[300px] h-[250px] absolute -right-16 lg:top-[10px]' />
          </div>
          {/* second-col */}
          <div className='col-span-2 py-10 pl-8 bg-gradient-to-br from-primary to-brandYellow/90
           text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>ยามาโตะ</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Yamato</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image3} alt="" className='w-[350px] h-[250px] absolute -right-9 lg:top-[8px] ' />
          </div>
          {/* third-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlues/90 to-gray-400/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>ดรีมบลู</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Blue dream</p>
                <Button
                  text="Browser"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image4} alt="" className='w-[400px] h-[350px] absolute -right-5 lg:buttom-[15px]' />
          </div>
          {/* fourth-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>เรดบี</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Red B</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image1} alt="" className='w-[300px] h-[250px] absolute -right-10 lg:top-[10px]' />
          </div>
        </div>
      </div>
    </div>

    <div className='py-3'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-5 gap-4 font-[Kanit]'>
          {/* first-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-primary/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-700'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>ซูชิแดง</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Sushi Red </p>
                <Button
                  text="Browser"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image6} alt="" className='w-[300px] h-[250px] absolute -right-1 lg:top-[40px]' />
          </div>
          {/* second-col */}
          <div className='py-10 pl-8 bg-gradient-to-br from-black/90 to-gray-700/90
           text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>ส้มเคลือบเหลือง</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Orange<br/>Rili Shrimp</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image7} alt="" className='w-[350px] h-[250px] absolute -right-50 lg:top-[50px] ' />
          </div>
          {/* third-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandYellow text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>แดง</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Red Cherry Shrimp</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img src={Image8} alt="" className='w-[350px] h-[300px] absolute -right-5 lg:buttom-[20px]' />
          </div>
          {/* fourth-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-primary/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>สโนว์บอล</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Snowball Shrimp</p>
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={Image5} alt="" className='w-[300px] h-[250px] absolute -right-5 lg:top-[10px]' />
          </div>
        </div>
      </div>
    </div>
      </div>
    
  );
};

export default AboutShrimp;
