import React from 'react'
import Image1 from "../../assets/SA/RedB.png";
import Image2 from "../../assets/SA/SushiOrange.png";
import Image3 from "../../assets/SA/Yamato.png";
import Image4 from "../../assets/SA/blue.png";
import Button from "../Shared/Button";
import { Link } from 'react-router-dom';
const Category = () => {
  return (
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
                <Link to="/KnowShrimp3">
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                /> </Link>
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
                <Link to="/KnowShrimp8">
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                /> </Link>
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
                <Link to="/KnowShrimp6">
                <Button
                  text="Browser"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                /> </Link>
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
                <Link to="/KnowShrimp1">
                <Button
                  text="Browser"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                /> </Link>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[300px] h-[250px] absolute -right-10 lg:top-[10px]' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;