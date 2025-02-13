import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Menulink = [{ id: 1, name: "Home", link: "/#" }];
const DropDownLinks1 = [
  { id: 1, name: "กุ้งแคระ", link: "/#" },
  { id: 2, name: "ปลาตู้ไม้น้ำ", link: "/#" },
];
const DropDownLinks2 = [
  { id: 1, name: "กุ้งแคระ", link: "/#" },
  { id: 2, name: "ปลาตู้ไม้น้ำ", link: "/#" },
];
const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 font-kanit">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Aq88
            </a>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {Menulink.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown About */}
                <li className="relative group">
                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    About <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </a>
                  {/* Dropdown links 1 */}
                  <div className="absolute hidden group-hover:block w-48 rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white p-2 transition-all duration-300">
                    <ul className="space-y-2">
                      {DropDownLinks1.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="block text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-primary/20 rounded-md"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* Dropdown Shop */}
                <li className="relative group">
                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    Shop <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </a>
                  {/* Dropdown links 2 */}
                  <div className="absolute hidden group-hover:block w-48 rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white p-2 transition-all duration-300">
                    <ul className="space-y-2">
                      {DropDownLinks2.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="block text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-primary/20 rounded-md"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex items-center gap-4">
            {/* Search Bar Section (เหมือนเดิม) */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Cart Section */}
            <button className="relative p-3">
              <FaCartShopping className="text-2xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark-mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;