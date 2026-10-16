import { useState } from 'react'

import './App.css'
import StatCard from './components/statCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='p-8'>
      <h1 className='text-2xl font-bold'>VolonteriHub</h1>
      <StatCard />
    </div>
    </>
    
  )
}

export default App
