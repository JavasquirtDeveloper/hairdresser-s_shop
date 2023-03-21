import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import OnboardingPage from './pages/onboarding_page/onboarding_page.jsx'
import SalonsPageFirst from './pages/salons_page_first/salons_page_first'
import SalonsPageSecond from './pages/salons_page_second/salons_page_second'
import SalonsPageThird from './pages/salons_page_third/salons_page_third'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<OnboardingPage/>}/>
    <Route path="/about1" element={<SalonsPageFirst/>}/>
    <Route path="/about2" element={<SalonsPageSecond/>}/>
    <Route path="/about3" element={<SalonsPageThird/>}/>
              </Routes>
  </BrowserRouter>
)

reportWebVitals()
