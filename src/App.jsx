import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import HobbyPage from './components/hobbypage/HobbyPage'
import CYOPage from './components/cyopage/CYOPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hobby' element={<HobbyPage />} />
        <Route path='/cyo-hobby' element={<CYOPage />} />
      </Routes>
    </Router>
  )
}

export default App


//hello//

// hello again //


//hello2//
//hello3//


//hello2//
//hello3//


//hello5//

