import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/home'
import Navbar from './component/Navbar'



function App() {
 

  return (
    <>
    <Router basename="/NavbarReact">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      
      
      </Routes>
      </Router>
    </>
  )
}

export default App
