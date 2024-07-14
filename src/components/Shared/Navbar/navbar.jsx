import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../Shared/Button/button';
import logo from '../../../assets/mmLogo.png';
import './navbar.css'
import { CloseIcon, ToggleIcon } from '../svgIcon';

const Navbar = ({ activeSection }) => {
    const [mobileToggle, setMobileToggle] = useState(false);
    const scrollToElementWithOffset = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 150;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileToggle(false);
    };
    return (
        <>
            <div className="empty-wrap" />
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
                    <div className="mobile-toggle">
                        <span onClick={() => setMobileToggle(true)}>
                            <ToggleIcon />
                        </span>
                    </div>
                </motion.div>
                <div
                    className="mobile-menus"
                    style={{ right: mobileToggle === false ? '-100vw' : '0' }}
                >
                    <ul>
                        <li
                            onClick={() => scrollToElementWithOffset('main-section')}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => scrollToElementWithOffset('about-section')}
                        >
                            About
                        </li>
                        <li
                            onClick={() => scrollToElementWithOffset('service-section')}
                        >
                            Service
                        </li>
                        <li
                            onClick={() => scrollToElementWithOffset('our-works-section')}
                        >
                            Portfolio
                        </li>
                        <li
                        // onClick={() => scrollToElementWithOffset('our-works-section')}
                        >
                            Contact Us
                        </li>
                    </ul>
                    <div className="close-icon" onClick={() => setMobileToggle(false)}><CloseIcon /></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;