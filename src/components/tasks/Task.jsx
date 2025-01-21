import React from "react";
import { PiChecksLight } from "react-icons/pi";
import { PiHeartStraightLight } from "react-icons/pi";
import { ImBin } from "react-icons/im";
import { PiPencilSlashFill } from "react-icons/pi";
const Task = () => {
  return (
    <div className=" border p-3 dark:border-[#3c6382] border-gray-200 w-full  rounded-md">
      <h3 className="sm:text-lg text-base font-semibold capitalize text-[#ff7f50] mb-2">
        Task Title
      </h3>
      <p className="text-sm text-gray-600  dark:text-gray-300 mb-4">
        {" "}
        this is my first task created by me . And this is my first task created
        by me . And this is my first task created by me And this is my first
        task created by me{" "}
      </p>

      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <button className="w-10 h-10 hover:bg-[#ff7f50] text-gray-600 dark:text-gray-300 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] flex items-center rounded justify-center">
            <PiChecksLight className="text-xl" /> </button>
          <button className="w-10 h-10 hover:bg-[#ff7f50] text-gray-600 dark:text-gray-300 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] flex items-center rounded justify-center">
            <PiHeartStraightLight className="text-xl" /></button>
        </div>

        <div className="flex gap-3">
          <button className="w-10 h-10 hover:bg-[#ff7f50] text-gray-600 dark:text-gray-300 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] flex items-center rounded justify-center">
          <ImBin className="text-lg" />
          </button>
          <button className="w-10 h-10 hover:bg-[#ff7f50] text-gray-600 dark:text-gray-300 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] flex items-center rounded justify-center">
          <PiPencilSlashFill className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
