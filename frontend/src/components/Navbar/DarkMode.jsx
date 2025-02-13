import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // access to HTML element
  console.log(element);

  // Set theme to localStorage and HTML element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
      document.body.classList.add("dark"); // ✅ เพิ่มคลาสให้ body
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
      document.body.classList.remove("dark"); // ✅ ลบคลาสออกจาก body
    }
  }, [theme]); 
   // Run only when `theme` changes

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10
        ${theme === "dark" ? "opacity-0" : "opacity-100"}
        transition-all duration-300`}
      />

      {/* Dark Mode Button */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="Dark Mode"
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"}
        transition-all duration-300`}
      />
    </div>
  );
};

export default DarkMode;
