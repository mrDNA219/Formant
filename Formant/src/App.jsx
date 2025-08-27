import { useState } from 'react'
import { Navbar } from './components';
import { Home, Paints, Recipes, Dashboard } from './pages';
import { Routes, Route} from 'react-router';
import './App.css'

function App() {

  return (
    <div className='main-content'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/paints" element={<Paints />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App
