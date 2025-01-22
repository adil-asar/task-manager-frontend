import axios from "axios";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import tasklist from "../../assets/task-list.png";
import { baseUrl } from "../../constants/baseUrl";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";


const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // validation schema
  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must not exceed 16 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Password must include a capital letter, number & special char"
      ),
  });

  // track input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
setApiError("");
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: null,
      });
    }
  };

  // hit the login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await validationSchema.validate(loginData, { abortEarly: false });
      const response = await axios.post(`${baseUrl}/users/login`, loginData);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("User_Token", token);
        fetchUser();
      }
    } catch (err) {
      if (err.inner) {
        const errors = {};
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setValidationErrors(errors);
      } else {
        console.error("api error",err.response.data.error);
        setApiError(err?.response?.data?.error);
      }
    }
    
  };

  const fetchUser = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("User_Token");
      if (token) {
        const response = await axios.get(`${baseUrl}/users/validate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          // console.log("User fetched:", response.data.data.name);
          localStorage.setItem("user-name", response.data.data.name);
          navigate("/");
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
    }
  };

  return (
    <div className=" md:w-1/2 h-full  px-10">
      <div className=" md:w-3/5 mx-auto  h-[15vh] flex items-center  ">
        <img className="w-16   h-16" src={tasklist} alt="task" />
      </div>
      <div className=" md:w-3/5 mx-auto  flex flex-col justify-center h-[85vh]  ">
        <h1 className="text-3xl font-semibold mb-2 text-[#ff7f50]">
          Sign In To Your Account
        </h1>
        <p className="text-gray-600 text-lg font-light">
          Organize, Prioritize, Achieve – All in One Place!
        </p>

        <div className="mt-5 w-full">
          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 h-12  text-gray-600  bg-[#f1f2f6] focus:outline-none "
          />
           {validationErrors.email && (
          <p className="text-red-600 text-xs mt-1 tracking-wide font-semibold"> 
            {validationErrors.email}
          </p>
        )}
        </div>
        <div className="mt-5 h-12 w-full relative">
          <input
            name="password"
            value={loginData.password}
            onChange={handleChange}
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
           
           <div>
           {validationErrors.password && (
          <p className="text-red-600 text-xs mt-1 tracking-wide font-semibold"> 
            {validationErrors.password}
          </p>
        )}
           </div>
          
        </div>

        <p className="text-[#ff7f50] mt-5 text-right text-sm font-medium">
          {" "}
          <Link to="/forgot-password">Forgot Password ?</Link>
        </p>

        <button
          onClick={handleSubmit}
          className="mt-5 w-full tracking-wide text-base font-medium bg-[#ff7f50] hover:bg-[#ff6348] h-12 text-white"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 mx-auto border-white border-t border-b rounded-full   animate-spin"></div>
          ) : (
            "Sign In"
          )}
        </button>
        {/* <ToastContainer theme="colored" /> */}
        <hr className=" w-full my-5 h-[1px] bg-gray-600 " />

        <p className="text-gray-600  text-sm font-medium">
          {`Don't have an account ?`}
          <Link
            to="/signup"
            className="text-[#ff7f50] ml-1 text-base font-medium "
          >
            Create Account
          </Link>
        </p>
        {apiError ? (
        <div className="w-full bg-red-200 px-3 py-3  mt-5 rounded-md ">
          <p className="text-red-600 text-xs font-medium  tracking-wider text-justify ">
            {apiError}
          </p>
        </div>
      ) : null}
      </div>
    </div>
  );
};

export default Loginform;
