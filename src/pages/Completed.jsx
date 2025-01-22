import PageHeader from '../components/common/PageHeader'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authenticateUser} from "../constants/auth"
const Completed = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated =  authenticateUser(navigate);
      if (!isAuthenticated) {
        console.log("User not authenticated");
      }
  }, [navigate]);

  return (
    <div className='w-full  '>
    <PageHeader name='Completed Tasks' />
        </div>
  )
}

export default Completed