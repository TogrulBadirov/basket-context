import React, { createContext, useEffect, useState } from 'react'

export const DecreaseContext = createContext()

const DecreaseProvider = ({children}) => {

    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket'))||[])
    
    useEffect(() => {
    localStorage.setItem('basket',JSON.stringify(basket))
    }, [basket])
    
    
    const datas = {
        basket,
        setBasket
    }
  return (
    <DecreaseContext.Provider value={datas}>
        {children}
    </DecreaseContext.Provider>
  )
}

export default DecreaseProvider