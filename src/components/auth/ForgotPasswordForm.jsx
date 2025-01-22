import  { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import tasklist from "../../assets/task-list.png"
import { baseUrl } from "../../constants/baseUrl";
import * as yup from "yup";
const ForgotPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotData, setForgotData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});
  const [apiError, setApiError] = useState("");

  
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
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    // track input field
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForgotData({
        ...forgotData,
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
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await validationSchema.validate(forgotData, { abortEarly: false });
          const response = await axios.post(`${baseUrl}/users/forgot-password`, forgotData);
          if (response.status === 200) {
            navigate("/signin");
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
         finally {
          setLoading(false);
        }
      };

  return (
    <div className=" md:w-1/2 h-full   px-10">
    <div className=" md:w-3/5 mx-auto  h-[15vh] flex items-center  ">
    <img className="w-16   h-16" src={tasklist} alt="task"  />	
    </div>
      <div className=" md:w-3/5 mx-auto flex flex-col justify-center h-[85vh]  ">
        <h1 className="text-3xl font-semibold mb-2 text-[#ff7f50]">
          Forgot Password
        </h1>
        <p className="text-gray-600 text-lg font-light">
        No worries, Reset Your Password Here ! 
        </p>

        <div className="mt-5 w-full">
          <input
            type="text"
            name="email"
            value={forgotData.email}
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
          value={forgotData.password}
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

      

        <button
        onClick={handleSubmit}
        className={`${validationErrors.password ? 'mt-10' : 'mt-5'} w-full tracking-wide text-sm bg-[#ff7f50] hover:bg-[#ff6348] h-12 text-white`}>
        {loading ? (
            <div className="w-6 h-6 border-2 mx-auto border-white border-t border-b rounded-full   animate-spin"></div>
          ) : (
            "Reset Password"
          )}
      
        </button>
        <hr className=" w-full my-5 h-[1px] bg-gray-600 " />

        <p className="text-gray-600  text-sm font-medium">
          Back to sign in ?
          <Link
            to="/signin"
            className="text-[#ff7f50] ml-1 text-base font-medium "
          >
           Sign In
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

export default ForgotPasswordForm;
