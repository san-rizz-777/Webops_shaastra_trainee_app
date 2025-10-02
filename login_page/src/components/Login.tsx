import { FaFingerprint } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState<bool>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex flex-col items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <img src={logo}  alt="Logo" className="w-12 md:w-14"/>
         <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>
              <p className="text-xs md:text-sm text-gray-500 text-center">
          Don't have an account? <span className="text-white">Sign up</span>
        </p>

        <div className="w-full flex flex-col gap-3">
          
          <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
            <MdAlternateEmail />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-centre bg-gray-800 p-2 rounded-xl gap-2 relative">
          <FaFingerprint/>
          <input 
          type = {showPassword ? "password" : "text"}
          placeholder="Password"
          className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
          />
           {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
      </div>
    </div>

       

</div>
<button className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base">
          Login
        </button>

    </div>
  );
};

export default Login;
  