
import Image1 from "../../assets/SA/f5.png";
import Image2 from "../../assets/SA/f6.png";
import Image3 from "../../assets/SA/f7.png";
import Image4 from "../../assets/SA/f8.png";
import Button from "../Shared/Button";
import { Link } from 'react-router-dom';
const Category = () => {
  return (
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
                <Link to="/KnowFish5">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[2500px] h-[200px] absolute -right-20 lg:buttom-[2px]' />
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
                <Link to="/KnowFish6">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image2} alt="" className='w-[350px] h-[250px] absolute -right-9 lg:top-[8px] ' />
          </div>
          {/* third-col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>ปลาเรนโบว์</p>
                <p className='text-2xl font-semibold mb-[2px]'>นีออนสั้น</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Short Body Neon Rainbow</p>
                <Link to ="/KnowFish8">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image4} alt="" className='w-[300px] h-[250px] absolute -right-2 lg:top-[10px]' />
          </div>
          {/* fourth-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-primary/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>ปลาน้ำจืด</p>
                <p className='text-2xl font-semibold mb-[2px]'>คาร์ดินัลเผือก</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Albino Cardinal Tetra</p>
                <Link to="/KnowFish7">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image3} alt="" className='w-[300px] h-[250px] absolute -right-5 lg:top-[30px]' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;