import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../../assets/mmLogo.png'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../svgIcon';
import './footer.css';

function Footer() {
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
  };
  return (
    <div className="footer-wrap">
      <motion.div
        className="footer-with-logo"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={logo} className="footer-logo" />
        <div className="footer-container">
          <div className="footer-left">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="footer-menus">
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
            <li>
              Contact
            </li>
          </div>
          <div className="footer-social-icons">
            <span><FacebookIcon /></span>
            <span><TwitterIcon /></span>
            <span><InstagramIcon /></span>
            <span><LinkedInIcon /></span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="footer-rights"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>© 2024 Metaminds. All rights reserved.</p>
      </motion.div>
    </div >
  );
}

export default Footer;
