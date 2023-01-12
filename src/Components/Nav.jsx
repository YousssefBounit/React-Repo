import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartIcone } from './Icons'
import { useSelector } from 'react-redux'

function Nav() {
    const [cube,setCube]=useState(true)
    const carts=useSelector(state=>state.cart.Cart)
    return (
        <div>
        <nav>
            <span>SHOP</span>
            <ul className='nav-links'>
                <span className={cube?'cubes':''}></span>
                <NavLink onClick={()=>setCube(true)} to={'/'}><li>SHOP</li></NavLink>
                <span className={cube?'cubes':''}></span>
                <span className={!cube?'cubes':''}></span>
                <NavLink onClick={()=>setCube(false)} to={'/Cart'}><li>CART</li></NavLink>
                <span className={!cube?'cubes':''}></span>            
            </ul>
            <ul >
                <Link onClick={()=>setCube(false)} to={'/Cart'}><li className='left-nav'>{CartIcone()}</li></Link>
                <div className='cart-length'>{carts.length}</div>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
