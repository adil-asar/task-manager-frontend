
import PageHeader from "../components/common/PageHeader";
import Container from "../components/tasks/Container";
// import { baseUrl } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authenticateUser} from "../constants/auth"
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated =  authenticateUser(navigate);
      if (!isAuthenticated) {
        console.log("User not authenticated");
      }
  }, [navigate]);
 

  return (
    <div className="w-full  ">
      <PageHeader name="All Tasks" />
      <Container />
    </div>
  );
};

export default Home;
