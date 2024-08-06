import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import {motion}  from "framer-motion"
const DashboardBranch = () => {
  return (
    <motion.div initial={{ x:"-100px"}} animate={{ x: 0 }} className="p-4 mb-6 relative overflow-hidden">
      <div className="bg-indigo-400 text-white rounded-lg relative p-4 shadow-lg overflow-hidden">
        <div className="circle bg-indigo-500 rounded-full w-[200px] h-[200px] absolute top-[-50px] opacity-50 right-[-100px] z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center flex-wrap">
            <CiLocationOn size={24} aria-label="Location icon" />
            <div className="ml-4">
              <h2 className="font-semibold text-lg">BRANCH NAME</h2>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-semibold">9.00 AM</p>
              <p>5.00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DashboardBranch
