import { FaFingerprint, FaDiscord } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo.png"

// ------------------------
// Login Page Component
// ------------------------
const Login = () => {
  // State for showing/hiding password text
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-violet-950 via-slate-950 to-indigo-950 relative overflow-hidden">
      
      {/* Tech grid background (light grid lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Animated glowing orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main login card */}
      <div className="w-[90%] max-w-sm md:max-w-md p-6 md:p-8 bg-slate-900/60 backdrop-blur-xl flex flex-col items-center gap-4 rounded-2xl shadow-2xl border border-violet-500/30 relative z-10">
        
        {/* Subtle glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur-lg opacity-20"></div>
        
        {/* Card content */}
        <div className="relative w-full flex flex-col items-center gap-4">
          
          {/* Logo */}
          <img 
            src={logo} 
            alt="Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain brightness-110 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
          />
        
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            Welcome Back
          </h1>
        
          {/* Subtitle */}
          <p className="text-sm md:text-base text-violet-300/80 text-center -mt-2">
            New here? Join us today!
          </p>

          {/* Input fields */}
          <div className="w-full flex flex-col gap-4 mt-2">
            
            {/* Email input */}
            <div className="w-full flex items-center gap-3 bg-violet-950/40 p-3 rounded-xl border border-violet-500/30 focus-within:border-violet-400 focus-within:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all backdrop-blur-sm">
              <MdAlternateEmail className="text-violet-400 text-xl flex-shrink-0" />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base placeholder:text-violet-400/50 text-white"
              />
            </div>

            {/* Password input with eye toggle */}
            <div className="w-full flex items-center bg-violet-950/40 p-3 rounded-xl gap-3 relative border border-violet-500/30 focus-within:border-violet-400 focus-within:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all backdrop-blur-sm">
              <FaFingerprint className="text-violet-400 text-xl flex-shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base placeholder:text-violet-400/50 text-white pr-10"
              />
              {/* Show/hide password icons */}
              {showPassword ? (
                <FaRegEye
                  className="absolute right-3 cursor-pointer text-violet-400 hover:text-violet-300 transition-colors text-lg"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaRegEyeSlash
                  className="absolute right-3 cursor-pointer text-violet-400 hover:text-violet-300 transition-colors text-lg"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          {/* Forgot password link */}
          <div className="w-full text-right -mt-2">
            <a href="#" className="text-sm text-violet-400 hover:text-violet-300 hover:underline transition-colors">
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button className="w-full p-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] transition-all text-base font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50">
            Login
          </button>

          {/* Link to sign-up */}
          <div className="w-full text-center -mt-1">
            <p className="text-sm text-violet-300/70">
              Don't have an account?{" "}
              <a href="#" className="text-violet-400 font-medium hover:text-violet-300 hover:underline transition-colors">
                Create New Account
              </a>
            </p>
          </div>

          {/* Divider with "Or" */}
          <div className="relative w-full flex items-center justify-center py-4">
            <div className="w-2/5 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
            <h3 className="text-sm px-4 text-violet-400/70 font-medium">Or</h3>
            <div className="w-2/5 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
          </div>

          {/* Social login buttons */}
          <div className="w-full flex items-center justify-center gap-3">
            {/* Discord */}
            <div className="p-3 px-8 bg-violet-950/40 cursor-pointer rounded-xl hover:bg-violet-900/50 transition-all border border-violet-500/30 hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-sm group">
              <FaDiscord className="text-2xl text-violet-400 group-hover:text-violet-300 transition-colors" />
            </div>
            {/* Google */}
            <div className="p-3 px-8 bg-violet-950/40 cursor-pointer rounded-xl hover:bg-violet-900/50 transition-all border border-violet-500/30 hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-sm">
              <FcGoogle className="text-2xl" />
            </div>
            {/* Twitter (X) */}
            <div className="p-3 px-8 bg-violet-950/40 cursor-pointer rounded-xl hover:bg-violet-900/50 transition-all border border-violet-500/30 hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-sm group">
              <FaXTwitter className="text-2xl text-violet-400 group-hover:text-violet-300 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
