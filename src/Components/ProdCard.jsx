import React, { useEffect, useState } from 'react'
import { Add, CartIcone, DeleteIcone } from './Icons'
import { useDispatch, useSelector } from 'react-redux'
import { AddProd, AddQnt } from './Redux/StoreSlices/CartSlice'

function ProdCard({e}) {
  const dispatch=useDispatch()
  const cart =useSelector(state=>state.cart.Cart)
  const [Active,setActive]=useState(false)
  const [Size,setSize]=useState('X-Small')
  const [Qnt,setQnt]=useState(1)
  const [Elem,setElem]=useState()
  useEffect(()=>{
    setElem({id:e.id,label:e.label,price:e.price,img:e.img,size:Size,qnt:Qnt})
  },[Size,Qnt])
  function handleAdd( ){
    setActive(false)
    let bol = false
    cart.map(elem=>{
      if(elem.id===e.id){
        dispatch(AddQnt({id:elem.id,newQnt:Qnt}))
        bol = true
      }
    })

    if(!bol)dispatch(AddProd(Elem))

  }
  return (
    <div>
      <div className='Prod-Card'>
        {Active&&<div className='Prod-Details'>
            <div className='Prod-inside-Items'>
                <div className='Prod-img-inside'>
                  <img className='img-inside' src={e.img} alt="" />
                </div>
                <div className='Prod-infos-inside'>
                <span onClick={()=>setActive(false)} className='deleteIcon'>{DeleteIcone()}</span><br/>
                  <span>{e.label}</span><br/>
                  <span> Price : {e.price}.00 Dh</span><br/>
                  <span className='Size-span'> <span>Size : </span> 
                    <span>
                      <select onChange={(e)=>{const val=e.target.value;setSize(val)}}>
                        <option value={'X-Small'}>X-Small</option>
                        <option value={'Small'}>Small</option>
                        <option value={'Medium'}>Medium</option>
                        <option value={'Large'}>Large</option>
                        <option value={'X-Large'}>X-Large</option>
                        <option value={'XX-Large'}>XX-Large</option>
                      </select>
                    </span>
                  </span>
                  <span>
                    <span>Quantity : </span>
                    <input type="number" min={1} max={10} value={Qnt} className='Size-qnt' onChange={(e)=>{const val=e.target.value;setQnt(val)}}/>
                  </span><br/><br/>
                  <span className='Add-Prod-To-Cart'>
                    <button onClick={handleAdd}>Add Product To Cart</button>
                  </span><br/>
                  <span className='Description-Prod'>
                    <span>Description</span><br/>
                    <div className='Description'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                      </p>
                    </div>
                  </span> 
              </div>
            </div>
        </div>}
        
        <div className='prod-img'>
          <img className='min-prod-img' src={e.img} alt={''}/>
        </div>
        <div className='prod-infos'>
            <div className='prod-font-infos'>
              <span>{e.label}</span><br/>
              <span>{e.price}.00 Dh</span>
            </div>
            <div className='prod-btns'>
              <span onClick={()=>setActive(true)} className='prod-cart-icon'>{CartIcone()}</span>
              <span onClick={()=>setActive(true)} className='prod-add-icon'>{Add()}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProdCard
