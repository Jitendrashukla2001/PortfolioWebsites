import React from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../src/index.css"
import $ from "jquery"
import Content from './Content'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Service from './Service'
import Footer from './Footer'

function App() {
  return (
    <div>

    
      <BrowserRouter>
      <Header></Header>
      
      
      <Routes>
        <Route path='/Service' element={<Service/>}/>
        <Route path="/" element={<Content></Content>}/>
       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App