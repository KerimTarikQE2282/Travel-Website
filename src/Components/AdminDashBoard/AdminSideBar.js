
import NavBar from '../../NavBar/NavBar'
import React from 'react'
import  {NavLink} from 'react-router-dom'

export default function AdminSideBar(){
    return(
       <div className='sideBar'>
        <NavBar/>
       <ul className='SideBarList'>
       
        <li className='hregList'><NavLink to={'/AddEvent'}> Add Event </NavLink></li>

       </ul>
       </div>
    )
}