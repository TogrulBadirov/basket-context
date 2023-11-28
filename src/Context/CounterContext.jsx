import React, { createContext, useState } from 'react'

export const CountContext = createContext()

function CounterContext ({children}) {
    const [count2, setCount2] = useState(0)
    const data ={
        count2,
        setCount2
    }
  return (
    <CountContext.Provider value={data}>
        {children}
    </CountContext.Provider>
  )
}

export default CounterContext