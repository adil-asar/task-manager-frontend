import { PiChecksLight } from "react-icons/pi";
import { PiHeartStraightLight } from "react-icons/pi";
import { ImBin } from "react-icons/im";
import { PiPencilSlashFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { baseUrl } from "../../constants/baseUrl";
import axios from "axios";
import { useState } from "react";

const Task = ({ task ,setTasks ,tasks  }) => {
 ;

  const [completed, setCompleted] = useState(task.complete);
  const [important, setImportant] = useState(task.important);

  // Function to mark a task as completed
  const markCompleted = async () => {
    const token = localStorage.getItem("User_Token");
    try {
      setCompleted(!completed);
       await axios.put(`${baseUrl}/tasks/complete/${task._id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  // Function to mark a task as important
    const markImportant = async () => {
    const token = localStorage.getItem("User_Token");
    try {
    setImportant(!important);
       await axios.put(`${baseUrl}/tasks/important/${task._id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
     
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  // Function to delete a task

const deleteTask = async () => {
  const token = localStorage.getItem("User_Token");
  try {
    await axios.delete(`${baseUrl}/tasks/delete/${task._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newTasks = tasks.filter((t) => t._id !== task._id);
    setTasks(newTasks);

  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

  return (
    <div className=" border p-3 dark:border-[#3c6382] border-gray-200 w-full  rounded-md">
      <h3 className="sm:text-lg text-base font-semibold capitalize text-[#ff7f50] mb-2">
        {task.title || "Task Title"}
      </h3>
      <p className="text-sm text-gray-600  dark:text-gray-300 mb-4">
        {task.description || "Task Description"}
      </p>

      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <button 
            onClick={markImportant}
          className={`w-10 h-10 ${
              important ?
               "bg-[#ff7f50] dark:bg-[#ff7f50] text-white hover:text-gray-600 dark:hover:text-gray-300 hover:bg-[#f1f2f6] dark:hover:bg-[#3c6382] " :
               " bg-[#f1f2f6] dark:bg-[#3c6382]  dark:text-gray-300 hover:bg-[#ff7f50] hover:text-white dark:hover:bg-[#3c6382] text-gray-600 "
            } flex items-center rounded justify-center`}>
            <PiChecksLight className="text-xl" />{" "}
          </button>
          <button
            onClick={markCompleted}
            className={`w-10 h-10 ${
              completed ?
               "bg-[#ff7f50] dark:bg-[#ff7f50] text-white hover:text-gray-600 dark:hover:text-gray-300 hover:bg-[#f1f2f6] dark:hover:bg-[#3c6382] " :
               " bg-[#f1f2f6] dark:bg-[#3c6382]  dark:text-gray-300 hover:bg-[#ff7f50] hover:text-white dark:hover:bg-[#3c6382] text-gray-600 "
            } flex items-center rounded justify-center`}
          >
            <PiHeartStraightLight className="text-xl" />
          </button>
        </div>

        <div className="flex gap-3">
          <button 
          onClick={deleteTask}
          className="w-10 h-10 hover:bg-[#ff7f50] dark:hover:bg-[#ff7f50] text-gray-600 dark:text-gray-300 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] flex items-center rounded justify-center">
            <ImBin className="text-lg" />
          </button>
          <button className="w-10 h-10 hover:bg-[#ff7f50] dark:hover:bg-[#ff7f50] text-gray-600 dark:text-gray-300 hover:text-white bg-[#f1f2f6] dark:bg-[#3c6382] flex items-center rounded justify-center">
            <PiPencilSlashFill className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    complete: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default Task;
