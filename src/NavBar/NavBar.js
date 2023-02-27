import React from 'react'
import { Link } from 'react-router-dom'
import personIcon from '../Images/pngegg (1).png'
import Logo from '../Images/Asset 1.png'


const NavBar = () => {
  return (
   <header>
    <img src={Logo} className='Logo'></img>
    <nav className='navbar'>
        <ul className='nav_links'>
         <li><Link to={'/BookNow'}> Book now</Link> </li>
         <li><a> Packages  </a>
         <ul>
          <li><Link to={'/PopularPackages'}>popular packages</Link></li>
          <li><Link to={'/AllPackages'}>All packages</Link></li>
         </ul>
          </li>
         <li><a>About us </a> 
         <ul>
          <li><Link to={'/AboutTheOrganization'} style={{textdecoration: "none"}} >About the organization</Link></li>
          <li><Link to={'/AboutTheFounder'}>About the founder</Link></li>
         </ul>
         </li>
         <li><Link to={'/ContactUs'}> Contact Us</Link> </li>
         <li><a> About Ethiopia  </a> 
         <ul>
          <li><Link to={'/CulturalHeritages'}> cultural Heritages</Link> </li>
          <li><Link to={'/NaturalHeritages'}>Natural heritages</Link></li>
         </ul>
         </li>
        </ul>
    </nav>
    <a><img src={personIcon} className='personIcon'></img></a>
   </header>
 
  )
}

export default NavBar
