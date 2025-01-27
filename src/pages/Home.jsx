import { useState , useEffect } from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/tasks/Container";
// import { baseUrl } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { authenticateUser} from "../constants/auth"

const Home = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
const [totalTasks, setTotalTasks] = useState(0);
  useEffect(() => {
    const isAuthenticated =  authenticateUser(navigate);
      if (!isAuthenticated) {
        console.log("User not authenticated");
      }
  }, [navigate]);
 

  return (
    <div className="w-full  ">
      <PageHeader name="All Tasks" />
    
      <Container 
      tasks={tasks} 
      loading={loading}
       totalTasks={totalTasks}
       setTasks={setTasks}
        setLoading={setLoading}
          setTotalTasks={setTotalTasks}
        />
    </div>
  );
};

export default Home;
