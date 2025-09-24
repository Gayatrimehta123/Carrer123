import { useState } from 'react'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-background'>
      <Home />
    </div>
  )
}

export default App
