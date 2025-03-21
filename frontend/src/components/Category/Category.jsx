
import Image1 from "../../assets/SA/f1.png";
import Image2 from "../../assets/SA/f3.png";
import Image3 from "../../assets/SA/f2.png";
import Image4 from "../../assets/SA/f4.png";
import Button from "../Shared/Button";
import { Link,  } from 'react-router-dom';

const Category = () => {
  return (
    <div className='py-2'>
      <div className='container'>
        <div className=' grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1
        lg:grid-cols-9 gap-4 font-[Kanit]'>
          {/* first-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>ไบจิเต้ </p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Bajite Rasbora</p>
                <Link to="/KnowFish1"> 
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[400px] h-[300px] absolute -right-16 lg:top-[10px]' />
          </div>
          {/* second-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>เพชรน้อย</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Diamond Rasbora</p>
                <Link to="/KnowFish2">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image3} alt="" className='w-[400px] h-[300px] absolute -right-16 lg:top-[10px] ' />
          </div>
          {/* third-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-brandBlues/90 to-primary/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div >
              <div className=' mb-4'>
                <p className=' text-white'>ปลาน้ำจืด</p>
                <p className='text-2xl font-semibold mb-[2px]'>คาร์ดินัล</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20'>Cardinal Tetra</p>
                <Link to="/KnowFish4">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image4} alt="" className='w-[300px] h-[250px] absolute -right-5 lg:top-[10px] ' />
          </div>
          {/* fours-col */}
          <div className='col-span-3 py-10 pl-5 bg-gradient-to-br from-black/90 to-brandBlues/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div >
              <div className=' mb-4'>
                <p className=' text-white'>ปลาซิว</p>
                <p className='text-2xl font-semibold mb-[2px]'>กาแล็คซี่ </p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20'>Galaxy Rasbora</p>
                <Link to="/KnowFish3">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image2} alt="" className='w-[450px] h-[250px] absolute -right-5 lg:top-[40px] ' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;