import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import Logout from './components/logout'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>


        <Route path='/about' element={<About />}>
        </Route>

        <Route path='/contact' element={<Contact />}>
        </Route>

        <Route path='/login' element={<Login />}>
        </Route>

        <Route path='/signup' element={<Signup />}>
        </Route>

        <Route path='/logout' element={<Logout />}>
        </Route>

        <Route path="*" element={<Errorpage />}>

        </Route>
      </Routes>

    </>
  )
}

export default App