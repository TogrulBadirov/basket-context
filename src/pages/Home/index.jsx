import React, { useContext, useEffect } from 'react'
import { DecreaseContext } from '../../Context/DecreaseContext'
import useFetch from '../../hooks/UseFetch'

const Home = () => {
    const { data, loading } = useFetch("https://fakestoreapi.com/products")

    const {basket,setBasket} = useContext(DecreaseContext)

    
  return (
    <div>
        Home
        {data && data.map((item)=>{
            return(
                    <ul>
                        <li>{item.title}</li>
                        <button onClick={()=>setBasket([...basket,item])}>Add to basket</button>
                    </ul>
            )
        })}

        <ul>
        {basket && basket.map((item)=>{
            return(
                <li>{item.title}</li>
            )
        })}
        </ul>
    </div>
  )
}

export default Home