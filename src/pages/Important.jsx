import { useEffect } from "react";
import { authenticateUser} from "../constants/auth"
import { useNavigate } from "react-router-dom";
import PageHeader from '../components/common/PageHeader'
const Important = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated =  authenticateUser(navigate);
      if (!isAuthenticated) {
        console.log("User not authenticated");
      }
  }, [navigate]);


  return (
    <div className='w-full  '>
    <PageHeader name='Important Tasks' />
        </div>
  )
}

export default Important