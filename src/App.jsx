import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import cricketfield from'./assets/cricketfield.jpg';
import useWindowSize from './hooks/useWindowsize'
import Footer from './components/footer'
import Header from './components/Header'
import GroundOwners from './pages/GroundOwners/GroundOwners'
import Players from './pages/Players/Players'
import Organizers from './pages/Organizers/Organizers'
function App() {
  const [count, setCount] = useState(0)
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
      <>
     <Router>
     
     <Header/>
     
      <Routes>
      
            <Route path="/" element={<Home />} />
             <Route path="/ground-owners" element={<GroundOwners />} />
              <Route path="/players" element={<Players />} />
               <Route path="/organizers" element={<Organizers />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
          
    {/* <Footer/> */}


  
     </Router>
      </>

    
  )
}

export default App
