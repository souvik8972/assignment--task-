import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

const LoginForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else {
      setPasswordError("");
    }

    //  login or registration logic
    console.log("Form submitted:", { email, password, name });
    navigate("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center w-full h-[80vh] relative overflow-hidden">
      {/* Background Blurred Circles */}
      <div className="w-[500px] h-[500px] rounded-full bg-indigo-500 opacity-5 absolute bottom-[-10px] left-[-100px] backdrop-blur-md"></div>
      <div className="w-[300px] h-[300px] rounded-full bg-indigo-500 opacity-10 absolute right-[-120px] top-1 backdrop-blur-md"></div>

      {/* Form with Animation */}
      <motion.form
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="relative z-10 bg-white p-8 rounded shadow-md max-w-sm w-full border border-gray-300 flex flex-col"
      >
        <h2 className="text-2xl text-indigo-500 font-semibold text-center mb-4">
          {isRegister ? "Register" : "Login"}
        </h2>

        <label className="block" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}

        {isRegister && (
          <>
            <label className="block text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </>
        )}

        <label className="block text-gray-700" htmlFor="password">
          Password:
        </label>
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-5 right-0 px-3 top-2 flex items-center"
          >
            {isPasswordVisible ? <RiEyeCloseLine /> : <MdRemoveRedEye />}
          </button>
        </div>
        {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}

        <button
          type="submit"
          className="bg-indigo-500 w-full py-2 text-white rounded-full transition duration-200 ease-in-out hover:bg-white hover:text-indigo-500 border border-indigo-500 focus:outline-none"
        >
          {isRegister ? "Register" : "Login"}
        </button>

        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-indigo-500 hover:underline"
            onClick={toggleForm}
          >
            {isRegister
              ? "Already have an account? Login"
              : "Need an account? Register"}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default LoginForm;
