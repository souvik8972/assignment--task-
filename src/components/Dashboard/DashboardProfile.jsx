import React from 'react';
import { motion } from 'framer-motion';
import { FaTasks, FaGraduationCap, FaComments, FaGift, FaDatabase, FaSignOutAlt } from 'react-icons/fa';
import img from "../../assets/img.jpg";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const DashboardProfile = () => {
    const navigate=useNavigate()
  return (
    <motion.div
      className="select-none max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-5"
      initial={{ x: -100 }}  // Initial position offscreen to the left
      animate={{ x: 0 }}     // Final position (onscreen)
      transition={{ duration: 0.5 }} // Duration of the animation
    >
        <p><IoIosArrowRoundBack onClick={() => navigate(-1)} className='cursor-pointer  text-xl ml-4 font-bold' /></p>
      <div className="p-6">
        <div className="flex flex-col items-center justify-center">
          <img className="w-24 h-24 object-cover rounded-full border-2 border-gray-900" src={img} alt="Profile" />
          <h2 className="mt-2 text-indigo-600 text-xl font-medium">Souvik</h2>
          <p className="text-gray-600"> Pharmacist | <span>123GTB </span></p>
        </div>
        <div className="flex flex-col mt-6 h-[47vh] justify-between">
          <button className="flex items-center justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaTasks className="mr-2 text-3xl p-2 rounded-lg text-indigo-500 border border-indigo-600" />
            My Tasks
          </button>
          <button className="flex items-center justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaGraduationCap className="mr-2  text-3xl p-2 rounded-lg text-indigo-500 border border-indigo-600" />
            My Learnings
          </button>
          <button className="flex items-center justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaComments className="mr-2 text-3xl p-2 rounded-lg text-indigo-500 border border-indigo-600" />
            My Communications
          </button>
          <button className="flex items-center justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaGift className="mr-2 text-3xl p-2 rounded-lg text-indigo-500 border border-indigo-600" />
            My Benefits
          </button>
          <button className="flex items-center justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaDatabase className="mr-2 text-3xl p-2 rounded-lg text-indigo-500 border border-indigo-600" />
            My Database
          </button>
          <button onClick={()=>{
            navigate("/")
          }} className="flex items-center justify-start px-4 py-2 text-red-700 hover:bg-gray-200 rounded-md mt-2">
            <FaSignOutAlt className="mr-2 text-3xl p-2" />
            Log Out
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardProfile;
