import React from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { Routes,Route ,Link } from 'react-router-dom'
import NotFound from './Pages/NotFound'

function Mainrouter() {
  return (
    <div>

      <ul>
        <li className='flex justify-between'>
         <Link to='/'>Home</Link>
         <Link to='About'>About</Link>
         <Link to='Services'>Services</Link>
         <Link to='Contact'>Contact</Link>
        </li>

      </ul>


      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path = 'About' element={<About/>}/>
        <Route path = 'Services' element={<Services/>}/>
        <Route path = 'Contact' element= {<Contact/>}/>
        <Route path='*' element = {<NotFound/>}/>

      </Routes>
    </div>
  )
}

export default Mainrouter
