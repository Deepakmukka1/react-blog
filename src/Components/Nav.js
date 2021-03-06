import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import Logo from "../Resources/logo.svg";
import BlogRead from "../Resources/BlogRead.svg";
const Navbar = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <div className="bg-blue-50 h-14 flex justify-between items-center w-full p-5 dark:bg-gray-900 border-b-3">
      <img src={Logo} width="80" height="80" alt="logo" />
      <img src={BlogRead} width="120" height="120" alt="logotext" />
      <div
        className="font-semibold text-2xl text-gray-200 cursor-pointer outline-none animate-bounce"
        onClick={() => {
          setTheme(theme);
        }}
      >
        {" "}
        {theme === "light" ? "🌙 " : "☀️ "}
      </div>
    </div>
  );
};

export default Navbar;
