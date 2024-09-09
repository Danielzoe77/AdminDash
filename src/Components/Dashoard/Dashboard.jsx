import React from 'react'
import Body from './Components/Body Section/Body'
import SideBar from './Components/SideBar Section/SideBar'
import '../Dashoard/dasboard.css'

const Dashboard = () => {
  return (
    <div className='container'>
   
     <SideBar/>
     <Body/>
    </div>
  )
}

export default Dashboard
