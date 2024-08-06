import React from 'react'
import DasboardFooter from './DasboardFooter'
import DashboardHeader from './DashboardHeader'
import DashboardBranch from './DashboardBranch'
import DashBoardResponsibilities from './DashBoardResponsibilities'
import DashboardProfile from './DashboardProfile'
import Layout from '../Layout'

const Dashboard = () => {
  return (
    <Layout>
    <div className='h-[85vh] max-sm:h-[81vh]'>
        
        <DashboardHeader/>
        <DashboardBranch/>
        <DashBoardResponsibilities/>
        {/* <DashboardProfile/> */}
        
      
    </div>
    </Layout>
  )
}

export default Dashboard
