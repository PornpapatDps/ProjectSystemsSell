import { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useCart } from "../CartContext/CartContext"; 
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
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            {/* Desktop Menu items */}
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
                
                {/* Dropdowns */}
                <li className="relative group">
                  <Link
                    to="/about"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    About
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </Link>
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
                <li className="relative group">
                  <Link
                    to="/shop"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    Shop
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </Link>
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
                <Link to="/shipping-report" className="text-gray-500 hover:text-black dark:hover:text-white font-semibold">
                  รายงานสถานะการจัดส่ง
                </Link>
              </ul>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-400">
                <FaCaretDown />
              </button>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex items-center gap-4">
            {/* Cart Section */}
            <Link to="/cart" className="relative p-3">
              <FaCartShopping className="text-2xl text-gray-600 dark:text-gray-400" />
              {cartItems.length > 0 && (
                <div className="w-5 h-5 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {cartItems.length}
                </div>
              )}
            </Link>

            {/* Dark-mode section */}
            <div>
              <DarkMode />
            </div>
            <div className="flex flex-initial items-center gap-2 justify-start mt-1">
            {/* Login Button */}
            <div className="w-full sm:w-auto">
              <Link to="/signin">
                <Button
                  icon={<BsPersonCircle className="text-2xl" />}
                  text="Login"
                  bgColor="bg-primary"
                  textColor="text-white"
                  className="w-full sm:w-auto"  // ใช้เต็มความกว้างในมือถือและขนาดปกติในขนาดใหญ่
                />
              </Link>
            </div>

            {/* Signup Button */}
            <div className="w-full sm:w-auto">
              <Link to="/signup">
                <Button
                  icon={<BsPersonCircle className="text-2xl" />}
                  text="Signup"
                  bgColor="bg-gray-400"
                  textColor="text-white"
                  className="w-full sm:w-auto"  // ใช้เต็มความกว้างในมือถือและขนาดปกติในขนาดใหญ่
                />
              </Link>
            </div>
          </div>

        </div>
        </div>

        {/* Mobile Menu - Toggled visibility with smooth transition */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out mt-4`}>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
            <Link to="/" className="block py-2 text-gray-500 hover:text-black dark:hover:text-white font-semibold mb-2">Home</Link>
            <Link to="/about" className="block py-2 text-gray-500 hover:text-black dark:hover:text-white font-semibold mb-2">About</Link>
            <Link to="/shop" className="block py-2 text-gray-500 hover:text-black dark:hover:text-white font-semibold mb-2">Shop</Link>
            <Link to="/shipping-report" className="block py-2 text-gray-500 hover:text-black dark:hover:text-white font-semibold">รายงานสถานะการจัดส่ง</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
