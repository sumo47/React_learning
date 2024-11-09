import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
import { useSelector } from "react-redux"
import { Outlet } from 'react-router-dom'

const Body = () => {
  const Menu = useSelector(store => store.app.isMenuOpen)
  console.log(Menu)
  return (
    <div className='grid grid-flow-col'>
      {Menu && <SideBar />}
      <Outlet/>
    </div>
  )
}

export default Body
