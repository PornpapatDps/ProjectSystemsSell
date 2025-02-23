
import Image1 from "../../assets/SA/Snow.png";
import Image2 from "../../assets/SA/SushiRed.png";
import Image3 from "../../assets/SA/Yellow.png";
import Image4 from "../../assets/SA/Red.png";
import Button from "../Shared/Button";
import { Link } from 'react-router-dom';
const Category = () => {
  return (
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
                <Link to="/KnowShrimp7">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image2} alt="" className='w-[300px] h-[250px] absolute -right-1 lg:top-[40px]' />
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
                <Link to="/KnowShrimp2">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image3} alt="" className='w-[350px] h-[250px] absolute -right-50 lg:top-[50px] ' />
          </div>
          {/* third-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandYellow text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>แดง</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Red Cherry Shrimp</p>
                <Link to="/KnowShrimp5">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image4} alt="" className='w-[350px] h-[300px] absolute -right-5 lg:buttom-[20px]' />
          </div>
          {/* fourth-col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-primary/90 text-white rounded-3xl relative h-[320px]
          flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>กุ้งแคระ</p>
                <p className='text-2xl font-semibold mb-[2px]'>สโนว์บอล</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Snowball Shrimp</p>
                <Link to="/KnowShrimp4">
                <Button
                  text="ศึกษาความรู้"
                  bgColor={"bg-white"}
                  textColor={"text-black"}
                /> </Link>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[300px] h-[250px] absolute -right-5 lg:top-[10px]' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;