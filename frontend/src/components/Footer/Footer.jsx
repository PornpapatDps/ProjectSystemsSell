
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLocationArrow  } from 'react-icons/fa6';


const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Shop",
        link: "/shop",
    },
    
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950 font-[Kanit]' >
      <div className="container" >
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* company detail */}
            <div className='py-8 px-4'>
                <a href="#"
                className='text-primary font-bold 
                tracking-widest text-2xl uppercase sm:text-3xl'>
                    88aqua
                </a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                88Aqua เป็นร้านจำหน่ายสัตว์น้ำสวยงาม อุปกรณ์ตู้ปลา และของตกแต่งสำหรับคนรักการเลี้ยงปลาและสัตว์น้ำทุกประเภท 
                เราคัดสรรสินค้าคุณภาพสูง ทั้งปลา กุ้งสวยงาม ไม้น้ำ รวมถึงอุปกรณ์ตู้ปลาครบครัน เช่น ระบบกรองน้ำ ไฟ LED หินตกแต่ง และอาหารสัตว์น้ำ
                </p>
                <p className='text-gray-500 mt-4'>
                    จัดทำเว็บไซต์ by Pornpapat Dps
                </p>
            </div>
            {/* Footer links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                <div className="py-8 px-4">
                    <h1 className="text-lg font-bold
                    sm:text-left mb-3
                    ">Important Links</h1>
                    <ul className='space-y-2 '>
                        {FooterLinks.map((data, index) => (
                            <li key={index} className='py-1'>
                                <a href={data.link}
                                className='text-gray-600 dark:text-gray-400 
                                hover:dark:text-white
                                 hover:text-black duration-300'>
                                    {data.title}
                                </a>    
                            </li>
                        ))}
                    </ul>
                </div>
                {/* second col links */}
                <div className="py-8 px-4">
                    <h1 className="text-lg font-bold
                    sm:text-left mb-3
                    ">Quick Links</h1>
                    <ul className='space-y-2 '>
                        {FooterLinks.map((data, index) => (
                            <li key={index} className='py-1'>
                                <a href={data.link}
                                className='text-gray-600 dark:text-gray-400 
                                hover:dark:text-white
                                 hover:text-black duration-300'>
                                    {data.title}
                                </a>    
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Comany Address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'> 
            <h1 className="text-lg font-bold
                    sm:text-left mb-3
                    ">Address</h1>
                <div>
                    <div className='flex items-center gap-2 '>
                        <FaLocationArrow/>
                        <p className='text-gray-600 dark:text-gray-400'>
                        735 ถ. กำแพงเพชร 2 แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900 </p>
                    </div>
                    <div className='flex items-center gap-2 mt-6'>
                        <FaMobileAlt />
                        <p className='text-gray-600 dark:text-gray-400'>
                        081 489 9464 </p>
                    </div>
                </div>
                {/*social media*/ }
                <div className='flex items-center gap-2 mt-6'>
                    <a href="https://www.instagram.com/88aqua/">
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100086453555381">
                        <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                    </a>
                </div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer;
