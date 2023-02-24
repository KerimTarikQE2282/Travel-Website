import React from 'react'
import WelcomImage from '../../Images/WelcomImage.jpg'

const WelcomeBody = () => {
    const myStyle={
        backgroundImage: 
        `url(${WelcomImage})` ,
        height:'100vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div style={myStyle}>
      <h1 className='WelcomeText'>Welcome to Ethiopia </h1>
    </div>
  )
}

export default WelcomeBody
