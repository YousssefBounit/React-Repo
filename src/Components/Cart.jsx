import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProd, UpdateQnt } from './Redux/StoreSlices/CartSlice'

function Cart() {
  const carts=useSelector(state=>state.cart.Cart)
  const dispatch = useDispatch()
  return (
    <div className='Cart-Comp'>
        <div className='Cart-Content'>
          <div>
            <div>
              <h1>CART</h1>
            </div>
            <div className='Table-Content'>
              <table className='cart-table'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    carts.map((elem,i)=>{
                      return(
                        <tr key={i}>
                          <td className='First-td'>
                            <span className='Table-Img'>
                              <img className='table-Prod-Img' src={elem.img} alt=''/>
                            </span>
                            <span>
                              <span>{elem.label}</span><br/><br/>
                              <span>Size : {elem.size}</span><br/>
                            </span>
                          </td>
                          <td>{elem.price}.00</td>
                          <td>
                            <input type="number" min={1} max={10} value={elem.qnt} onChange={(e)=>{const val = e.target.value;dispatch(UpdateQnt({newQnt:val,id:elem.id}))}} className='cart-qnt' />
                          </td>
                          <td>1500.00</td>
                          <td><button className='table-delete' onClick={()=>dispatch(DeleteProd(elem.id))}>Delete</button></td>
                        </tr>
                      )
                    })
                  }
                  

                </tbody>
              </table>
            </div>
            <div>
              <div className='Checkout-Card'>
                  <div className='Titel-check'>
                      <span>Subtotal :</span>
                      <span>$1500.00 USD</span>
                  </div>
                  <div>
                      <span>Taxes and <u>shipping</u> calculated at  checkout</span>
                  </div><br/>
                  <div>
                      <button className='Checkout-Btn'>CHECK OUT</button>
                  </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
