
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
const Loginform = () => {

    const [showPassword, setShowPassword] = useState(false);
    
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" md:w-1/2 h-full  flex flex-col justify-center p-10">
    <div className=" md:w-3/4 mx-auto ">
      <h1 className="text-3xl font-semibold mb-2 text-[#ff7f50]">
        Sign In To Your Account
      </h1>
      <p className="text-gray-600 text-lg font-light">
        Organize, Prioritize, Achieve – All in One Place!
      </p>

      <div className="mt-5 w-full">
        <input
          type="text"
          placeholder="Email"
          className="w-full px-3 h-12  text-gray-600  bg-[#f1f2f6] focus:outline-none "
        />
      </div>
      <div className="mt-5 h-12 w-full relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full px-3 h-12 text-gray-600  bg-[#f1f2f6] focus:outline-none "
        />
        {showPassword ? (
          <div
            onClick={togglePasswordVisibility}
            className="h-12 w-12 right-0 cursor-pointer top-0 flex justify-center items-center absolute"
          >
            {" "}
            <PiEye className="text-2xl text-gray-600" />{" "}
          </div>
        ) : (
          <div
            onClick={togglePasswordVisibility}
            className="h-12 w-12 right-0 top-0 cursor-pointer flex justify-center items-center absolute"
          >
            {" "}
            <PiEyeSlash className="text-2xl text-gray-600" />{" "}
          </div>
        )}
      </div>

      <p className="text-[#ff7f50] mt-5 text-right text-sm font-medium">
        {" "}
   <Link to="/forgot-password">Forgot Password ?</Link>
      </p>

      <button className="mt-5 w-full tracking-wide text-base font-medium bg-[#ff7f50] hover:bg-[#ff6348] p-3 text-white">
        {" "}
        Sign In{" "}
      </button>
      <hr className=" w-full my-5 h-[1px] bg-gray-600 " />

      <p className="text-gray-600  text-sm font-medium">
      Don't have an account ?
        <Link to="/signup" className="text-[#ff7f50] ml-1 text-base font-medium ">
          Create Account
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Loginform