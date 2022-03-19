import React from 'react'
import './AboutMe.css'
import Me from '../../no-background/side-full-png.png'

const AboutMe = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Me} alt='mypic' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Hi there ! I'm Sri Lankan, 22 and I live in the United Arab Emirates.
        </p>
        <p className='a-desc'>
          I'm a self-taught Developer through Google, Youtube, Udemy courses,
          Stack Overflow, etc. My tech stack currently is React, Javascript,
          HTML, CSS, Material-UI and Bootstrap.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
