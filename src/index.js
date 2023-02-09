import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import OnboardingPage from './pages/onboarding_page/onboarding_page'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <OnboardingPage />
  </React.StrictMode>
)

reportWebVitals()
