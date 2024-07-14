import React from 'react';
import Navbar from '../../components/Shared/Navbar/navbar';
import MainSection from '../../components/Home/VideoPlayer/mainSection';
import About from '../../components/Home/About/about';
import OurWorks from '../../components/Home/OurWorks/ourWorks';
import Card from '../../components/Home/Card/card';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <About />
      <OurWorks />
      <Card />
    </div>
  );
}

export default Home;
