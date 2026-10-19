import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import  Sidebar  from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
    
  )
}

export default App
