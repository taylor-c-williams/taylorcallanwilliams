import { Routes, Route } from 'react-router-dom'
import Main from './views/Main/Main'
import About from './views/About/About'
import Title from './components/Title/Title'
import './fonts/CodecColdRegular.ttf'
import './fonts/VictorMonoItalic.ttf'
import './fonts/VictorMonoMedium.ttf'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Title />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
