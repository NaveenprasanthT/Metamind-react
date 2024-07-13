import React from 'react'
import Button from '../Button/button'
import './videoplayer.css'

const MainSection = () => {
  return (
    <div className='videoPlayerContainer'>
    <div className='vdotitle'>
        <h1>We make you fly <span>higher</span> lower</h1>
        <p>That’s when people see you fly</p>
        <Button buttonTxt={"Contact US"}/>
    </div>  
    <div></div>
</div>
  )
}

export default MainSection