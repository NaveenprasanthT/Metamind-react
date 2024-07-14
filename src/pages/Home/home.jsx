import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Shared/Navbar/navbar';
import MainSection from '../../components/Home/VideoPlayer/mainSection';
import About from '../../components/Home/About/about';
import OurWorks from '../../components/Home/OurWorks/ourWorks';
import Card from '../../components/Home/Card/card';
import './home.css';
import Footer from '../../components/Shared/Footer/footer';
import OurService from '../../components/Home/OurService/OurService';

function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home">
      <div className="main-section">
        <Navbar activeSection={activeSection} />
        <section id="main-section">
          <MainSection />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section id="service-section">
          <OurService />
        </section>
        <section id="our-works-section">
          <OurWorks />
        </section>
        <Card />
        <Footer />
      </div>
      <div className="background-color-wrap" />
    </div>
  );
}

export default Home;
