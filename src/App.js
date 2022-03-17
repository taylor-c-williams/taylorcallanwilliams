import { Routes, Route } from 'react-router-dom'
import Main from './views/Main/Main'
import Nav from './components/Nav/Nav'
import './fonts/CodecColdRegular.ttf'
import './fonts/VictorMonoItalic.ttf'
import './fonts/VictorMonoMedium.ttf'
import './App.css';

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </>
  );
}

export default App;
