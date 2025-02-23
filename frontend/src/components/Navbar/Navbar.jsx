
import { Link } from "react-router-dom"; // ใช้ Link แทน a

import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useCart } from "../CartContext/CartContext"; // ✅ ใช้งาน Cart Context
import { BsPersonCircle } from "react-icons/bs";
import Button from "../Shared/Button";

const Menulink = [{ id: 1, name: "Home", link: "/" }];
const DropDownLinks1 = [
  { id: 1, name: "กุ้งแคระ", link: "/shrimp" },
  { id: 2, name: "ปลาตู้ไม้น้ำ", link: "/fish" },
];
const DropDownLinks2 = [
  { id: 1, name: "กุ้งแคระ", link: "/shrimp-shop" },
  { id: 2, name: "ปลาตู้ไม้น้ำ", link: "/fish-shop" },
];

const Navbar = () => {
  const { cartItems } = useCart(); // ✅ ดึงข้อมูลตะกร้าสินค้าจาก Context

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 font-kanit">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Aq88
            </Link>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {Menulink.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}

                {/* Dropdown About */}
                <li className="relative group">
                  <Link
                    to="/about"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    About
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </Link>
                  {/* Dropdown links */}
                  <div className="absolute hidden group-hover:block w-48 rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white p-2 transition-all duration-300">
                    <ul className="space-y-2">
                      {DropDownLinks1.map((data) => (
                        <li key={data.id}>
                          <Link
                            to={data.link}
                            className="block text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-primary/20 rounded-md"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Dropdown Shop */}
                <li className="relative group">
                  <Link
                    to="/shop"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    Shop
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </Link>
                  {/* Dropdown links */}
                  <div className="absolute hidden group-hover:block w-48 rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white p-2 transition-all duration-300">
                    <ul className="space-y-2">
                      {DropDownLinks2.map((data) => (
                        <li key={data.id}>
                          <Link
                            to={data.link}
                            className="block text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-primary/20 rounded-md"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <Link to="/shipping-report" className="text-gray-500 hover:text-black  dark:hover:text-white font-semibold">
                รายงานสถานะการจัดส่ง
</Link>


              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex items-center gap-4">
            

            {/* Cart Section */}
            <Link to="/cart" className="relative p-3"> {/* ✅ ใช้ <Link> ครอบแทน <button> */}
              <FaCartShopping className="text-2xl text-gray-600 dark:text-gray-400" />
              {cartItems.length > 0 && ( /* ✅ แสดงตัวเลขเฉพาะเมื่อมีสินค้า */
                <div className="w-5 h-5 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {cartItems.length}
                </div>
              )}
            </Link>

            {/* Dark-mode section */}
            <div>
              <DarkMode />
            </div>                     
            {/* Login Button */}
            <div className="mt-">
                    <Link to="/signin">  
                      <Button 
                        icon={<BsPersonCircle className="text-2xl" /> }
                        text="Login"
                        bgColor="bg-primary"
                        textColor="text-white"               
                      />
                    </Link>
                  </div>
            {/* Sigup Button */}
            <div className="mt-">
                    <Link to="/signup">  
                      <Button 
                        icon={<BsPersonCircle className="text-2xl" /> }
                        text="Signup"
                        bgColor="bg-gray-400"
                        textColor="text-white"               
                      />
                    </Link>
                  </div>    
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;