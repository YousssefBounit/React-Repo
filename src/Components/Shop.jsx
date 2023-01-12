import React, { useState } from 'react'
import ProdCard from './ProdCard'
import { useSelector } from 'react-redux'

function Shop() {
  const prods = useSelector(state=>state.shop.Productes)
  const [search,setSearch] = useState('')
  const product = prods.filter((e)=>e.label.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='Shop-Comp'>
        <div className='Shop-Content'>
            <div>
                <h1>SHOP</h1>
                <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
                <div className='cards' >
                  {
                  product.map((e,i)=>{
                    return <ProdCard key={i} e={e}/>
                  })
                  }       
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Shop
