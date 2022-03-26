import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Main from './views/Main/Main';
import About from './views/About/About';
import Title from './components/Title/Title';
import Portfolio from './views/Portfolio/Portfolio';
import Contact from './views/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="home" element={<Title />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
