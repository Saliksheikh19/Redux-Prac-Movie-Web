
import React from "react"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/home/home'
import Moviedetail from './components/moviedetails/moviedetail'
import Pagenotfound from './components/pagenotfound/pagenotfound'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
function App() {
 

  return (
 <BrowserRouter>
 <Header></Header>
   <Routes>
      <Route path='/' Component={Home} />
      <Route path='/movie/:imbdID' Component={Moviedetail} />
      <Route Component={Pagenotfound} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>

  )
}

export default App
