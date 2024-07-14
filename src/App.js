import About from './components/About/about';
import Navbar from './components/Navbar/navbar';
import './App.css'
import Card from './components/Card/card';
import MainSection from './components/VideoPlayer/mainSection';
import OurWorks from './components/OurWorks/ourWorks';

function App() {
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

export default App;
