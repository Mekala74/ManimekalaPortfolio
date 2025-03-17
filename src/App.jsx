import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PortfolioPage from './MyPortfolio/Portfolio'

function App() {

  return (
    <Routes>
      <Route path='/Portfolio' element={<PortfolioPage/>} />
    </Routes>

  )
}

export default App
