import  { useState, useEffect } from "react";
import { PiUserFocusLight } from "react-icons/pi";
import { PiPowerLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";
import { PiMoonLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
const [username, setUsername] = useState("");
  // fetching username

  useEffect(() => {
    const name = localStorage.getItem("user-name");
   if (name) {
      setUsername(name);
    }
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("User_Token");
    localStorage.removeItem("user-name");
   navigate("/signin");
  };

  return (
    <aside className="ml-[75px]  h-[75px] border-b border-gray-200  dark:border-[#3c6382] flex flex-row items-center fixed top-0 w-[calc(100%-75px)]  justify-between    px-5">
      <div className="flex gap-2 items-center ">
        <div className="w-10 h-10 bg-[#f1f2f6] text-gray-600 dark:bg-[#3c6382] dark:text-gray-300 flex items-center mx-auto justify-center rounded">
          <PiUserFocusLight className=" text-2xl" />
        </div>
        <div className="flex flex-col  ">
          <p className="text-sm font-medium mb-0.5 text-[#ff7f50]">{username || "User Name"}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Welcome Back !
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-11 h-11 hover:bg-[#ff7f50] text-gray-600 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] dark:text-gray-300 flex items-center justify-center rounded"
        >
          {darkMode ? (
            <PiSunLight className=" text-xl" />
          ) : (
            <PiMoonLight className=" text-xl" />
          )}
        </button>
        <button 
        onClick={handleLogout}
        className="w-11 h-11 hover:bg-[#ff7f50] text-gray-600 hover:text-white dark:bg-[#3c6382] dark:text-gray-300 bg-[#f1f2f6] flex items-center justify-center rounded">
          <PiPowerLight className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
