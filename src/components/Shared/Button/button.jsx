import React from 'react'
import './button.css'

const Button = ({buttonTxt,handleClick}) => {
  return (
    <button 
    className='commonBtn' 
    onClick={()=>{handleClick()}}>
    {buttonTxt}
    </button>
  )
}

export default Button;