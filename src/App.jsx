import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './components/Login.jsx'; // Import the LoginPage component
import ForgotPasswordPage from './components/forgetpass.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-background'>
      {/* Use Routes to manage your different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
      </Routes>
    </div>
  )
}

export default App
