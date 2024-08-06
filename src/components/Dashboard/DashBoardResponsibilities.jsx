import React from 'react';
import { motion } from 'framer-motion';
import { BsBook, BsCalendar2Event, BsDroplet, BsWallet } from 'react-icons/bs';

const DashBoardResponsibilities = () => {
  // Define animation properties
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className='w-full h-[50vh]'>
      <h2 className="text-lg font-semibold mb-4 font-marcellus pl-4 text-indigo-600">My Responsibilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 pl-2 pr-2 gap-4">
        {/* My Task */}
        <motion.div
          className="bg-yellow-100 rounded-lg p-4 shadow-md flex flex-col items-start"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-start flex-col justify-start mb-2">
            <BsDroplet className="text-yellow-600 mb-3 text-4xl bg-orange-200 p-2 rounded-full" />
            <h3 className="font-semibold">My Task</h3>
          </div>
          <p className="text-gray-600 mb-2">Temperature lock</p>
          <span className="bg-green-100 text-green-600 py-1 p-2 rounded-full text-sm">
            Completed
          </span>
        </motion.div>

        {/* My Learning */}
        <motion.div
          className="bg-blue-100 rounded-lg p-4 shadow-md flex flex-col items-start"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start flex-col justify-start mb-2">
            <BsBook className="text-blue-600 mb-3 text-4xl bg-blue-200 p-2 font-extrabold rounded-full" />
            <h3 className="font-semibold">My Learning</h3>
          </div>
          <p className="text-gray-600 mb-2">Reading materials</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <span className="mt-2 text-gray-600 text-sm">50%</span>
        </motion.div>

        {/* My Communications */}
        <motion.div
          className="bg-red-100 rounded-lg p-4 shadow-md flex flex-col items-start"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-start flex-col justify-start mb-2">
            <BsCalendar2Event className="text-red-600 mb-3 text-4xl bg-red-200 p-2 rounded-full" />
            <h3 className="font-semibold">My Communications</h3>
          </div>
          <p className="text-gray-600 mb-2">Meetings and others</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <span className="mt-2 text-gray-600 text-sm">50%</span>
        </motion.div>

        {/* My Benefits */}
        <motion.div
          className="bg-purple-100 rounded-lg p-4 shadow-md flex flex-col items-start"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-start flex-col justify-start mb-4">
            <BsWallet className="text-purple-600 mb-3 text-4xl bg-purple-200 p-2 rounded-full" />
            <h3 className="font-semibold">My Benefits</h3>
          </div>
          <p className="text-gray-600 mb-2">Salary and others</p>
        </motion.div>
      </div>
    </div>
  );
}

export default DashBoardResponsibilities;
