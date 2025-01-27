import axios from "axios";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { baseUrl } from "../../constants/baseUrl";
import Task from './Task'
import Loading from "../common/Loading";


const Container = ({ tasks , setTasks , loading , setLoading , totalTasks , setTotalTasks}) => {


  const fetchTasks = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("User_Token");
      const response = await axios.get(`${baseUrl}/tasks/All`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response?.status === 200){
        setTasks(response.data?.tasks);
        setTotalTasks(response.data?.totalCount);
        setLoading(false);
        console.log("Tasks fetched successfully : ", totalTasks);
      }
    
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
    {loading ? (
      <Loading />
    ) : (
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-5 gap-6">
        {tasks?.map((task) => (
          <Task key={task._id} task={task}  tasks={tasks} setTasks={setTasks} />
        ))}
      </section>
    )}
  </div>
  )
}

Container.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  totalTasks: PropTypes.number.isRequired,
  setTotalTasks: PropTypes.func.isRequired,
};



export default Container
