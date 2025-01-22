import axios from "axios";
import { baseUrl } from "./baseUrl";



export  const authenticateUser = async (navigate) => {
  try {
    const token = localStorage.getItem("User_Token");

    if (!token) {
      navigate("/signin");
      return false;
    }

    const response = await axios.get(`${baseUrl}/users/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      localStorage.removeItem("User_Token");
      navigate("/signin");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error validating user:", error);
    localStorage.removeItem("User_Token");
    navigate("/signin");
    return false;
  }
};
