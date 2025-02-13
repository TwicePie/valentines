import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <Router basename="/valentines">
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <MusicPlayer />
      </div>
    </Router>
  )
}

export default App
