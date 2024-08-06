import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import DashboardFooter from './Dashboard/DasboardFooter'
import DashboardProfile from './Dashboard/DashboardProfile'

const Layout = ({children}) => {
  return (
    <div>
        {children}
        <DashboardFooter/>
      
    </div>
  )
}

export default Layout
