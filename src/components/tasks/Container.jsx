import axios from "axios";
import { useState , useEffect } from "react";
import { baseUrl } from "../../constants/baseUrl";
import Task from './Task'

const Container = () => {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("User_Token");
      const response = await axios.get(`${baseUrl}/tasks/All`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data?.tasks);
      console.log(response.data?.tasks)
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
<section className="grid grid-cols-4 mt-5 gap-6">
{
  tasks?.map((task) => (
    <Task key={task._id} task={task} />
  ))
}


</section>
  )
}

export default Container