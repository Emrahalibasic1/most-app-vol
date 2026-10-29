import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'

function App() {

  return (
   <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element = {<Dashboard/>} />
        <Route path='/zadaci' element = {<h1 className='p-8 text-2xl font-bold'> Zadaci</h1>} />
          <Route path='/timovi' element = {<h1 className='p-8 text-2xl font-bold'> Timovi</h1>} />
             <Route path='/sastanci' element = {<h1 className='p-8 text-2xl font-bold'> Sastanci</h1>} />
                <Route path='/okr' element = {<h1 className='p-8 text-2xl font-bold'> OKR Ciljevi</h1>} />
                   <Route path='/izvjestaji' element = {<h1 className='p-8 text-2xl font-bold'> Izvjestaji</h1>} />
                      <Route path='/profil' element = {<h1 className='p-8 text-2xl font-bold'> Profil</h1>} />
      </Route>
   </Routes>
    
  )
}

export default App
