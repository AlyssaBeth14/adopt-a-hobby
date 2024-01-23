import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HobbyPage from './components/hobbypage/HobbyPage'
import CYOPage from './components/cyopage/CYOPage'
// import Footer from './components/footer/Footer'

import Homepage from './components/homepage/Homepage'
import MyComponent from './components/hobbypage/textScroll'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/testing-scroll' element={<MyComponent />} />
        <Route path='/hobby' element={<HobbyPage />} />
        <Route path='/cyo-hobby' element={<CYOPage />} />
      </Routes>
    </Router>
  )
}

export default App
