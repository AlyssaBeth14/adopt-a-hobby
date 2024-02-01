import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HobbyPage from './components/hobbypage/HobbyPage'
import CYOPage from './components/cyopage/CYOPage'
import Footer from './components/footer/Footer.jsx'
import Homepage from './components/homepage/Homepage.jsx'
import SearchBar from './components/hobbypage/searchBar.jsx'
import WTBPage from './components/wtbpage/WTBPage.jsx'
import Admin from './components/admin/admin.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hobby/:id' element={<HobbyPage />} />
        <Route path='/cyo-hobby' element={<CYOPage />} />
        <Route path='/test-searchbar' element={<SearchBar />} />
        <Route path='/hobby/:id/where-to-buy' element={<WTBPage />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App