import React from 'react'
import Button from '../../Shared/Button/button';
import logo from '../../../assets/mmLogo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='navbarWrap'>
            <div className='navLogo'>
                <img alt='navbar_logo' src={logo}/>
            </div>
            <div className='navbarList'>
                <ul className='menuLists'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <div className='navbarBtn'>
             <Button buttonTxt={"Contact US"} handleClick={()=>{}} />
            </div>
        </div>
    </div>
  )
}

export default Navbar;