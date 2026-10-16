import { useState } from 'react'

import './App.css'
import StatCard from './components/statCard'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="p-8">
     <Dashboard />
    </div>
    
  )
}

export default App
