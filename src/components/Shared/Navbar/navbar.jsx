import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../Shared/Button/button';
import logo from '../../../assets/mmLogo.png';
import './navbar.css'

const Navbar = ({ activeSection }) => {
    const scrollToElementWithOffset = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className='navbarContainer'>
            <motion.div
                className='navbarWrap'
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className='navLogo'>
                    <img alt='navbar_logo' src={logo} />
                </div>
                <div className='navbarList'>
                    <ul className='menuLists'>
                        <li
                            onClick={() => scrollToElementWithOffset('main-section')}
                            style={{ color: activeSection === 'main-section' && '#6633EE' }}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => scrollToElementWithOffset('about-section')}
                            style={{ color: activeSection === 'about-section' && '#6633EE' }}
                        >
                            About
                        </li>
                        <li
                            onClick={() => scrollToElementWithOffset('service-section')}
                            style={{ color: activeSection === 'service-section' && '#6633EE' }}
                        >
                            Service
                        </li>
                        <li
                            onClick={() => scrollToElementWithOffset('our-works-section')}
                            style={{ color: activeSection === 'our-works-section' && '#6633EE' }}
                        >
                            Portfolio
                        </li>
                    </ul>
                </div>
                <div className='navbarBtn'>
                    <Button buttonTxt={"Contact US"} handleClick={() => { }} />
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar;