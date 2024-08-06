import React from 'react'
import { FiBell } from 'react-icons/fi'
import { motion } from 'framer-motion'
const DashboardHeader = () => {
  return ( 
     <motion.div initial={{ y:"-100px"}} animate={{ y: 0 }} className="w-full h-[10vh]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pl-4 pr-4 pt-2">
        <div>
          <h1 className="text-2xl font-bold font-marcellus text-inFile">Hello Souvik !</h1>
          <p className="text-gray-500">5 Mar 2024</p>
        </div>
        <FiBell  className="text-inFile text-3xl" />
      </div>
       </motion.div>
  )
}

export default DashboardHeader
