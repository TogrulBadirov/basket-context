import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import CounterContext from './Context/CounterContext'
import DecreaseProvider from './Context/DecreaseContext'

function App() {

  return (
    <>

        
        <DecreaseProvider >

      <Home/>

      

        </DecreaseProvider>




    </>
  )
}

export default App
