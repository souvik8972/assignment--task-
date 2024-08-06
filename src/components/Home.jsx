import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import lottieJson from "../assets/lottiejson.json";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
    const navigate=useNavigate();
  const handleClick = () => {
    // Handle click event
    navigate("/login");
  };

  // Define animation variants for text and other elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const lottieVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const ccircleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 0.1, y: 0 },
  };

  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row justify-center relative items-center overflow-hidden select-none">
      {/* Background Blurred Circles */}
    
      <motion.div
        variants={ccircleVariants}
        initial="hidden"
        animate="visible"
        className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-inFile opacity-5 absolute top-[-5px] left-[-50px] md:left-[-100px]"
      ></motion.div>
      <motion.div
        variants={ccircleVariants}
        initial="hidden"
        animate="visible"
        className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-inFile opacity-5 absolute right-[-60px] md:right-[-120px] bottom-1"
      ></motion.div>

      {/* Animated Left Section */}
      <motion.div
        className="w-full md:w-1/3 h-full flex flex-col justify-center items-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col items-start text-4xl md:text-6xl pl-4 md:pl-40 gap-2 font-bebas"
          variants={textVariants}
        >
          <h2>
            manage all your <span className="text-inFile">Task</span>
          </h2>
          <h2>
            in <span className="text-inFile">one place</span>
          </h2>
          <p className="text-xs md:text-sm pb-10 font-rubik">
            a comfortable way to handle all of your task
          </p>
        </motion.div>

        <motion.div className="button" variants={textVariants}>
          <motion.button
            onClick={handleClick}
            className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Right Section */}
      <motion.div
        className="w-full md:w-1/2 h-full flex items-center justify-center"
        variants={lottieVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.5 }}
      >
        <Lottie animationData={lottieJson} loop={true} />
      </motion.div>
        <Footer />
    </div>
  );
};

export default Home;
