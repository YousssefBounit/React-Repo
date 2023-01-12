import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Cart:[]
}

export const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        AddProd:(state,action)=>{
             state.Cart.push(action.payload)
        },
        DeleteProd:(state,action)=>{
            const newCart=state.Cart.filter((elem)=>elem.id!==action.payload)
            state.Cart = newCart
        },
        UpdateQnt:(state,action)=>{
            state.Cart.map(e=>{
                if(e.id===action.payload.id){
                    return e.qnt = action.payload.newQnt 
                }
                return e
            }) 
        },
        AddQnt:(state,action)=>{
            state.Cart.map(e=>{
                if(e.id===action.payload.id) e.qnt = parseInt(e.qnt)  + parseInt(action.payload.newQnt)
                return e
            })
        }
    }
})

export const {AddProd,DeleteProd,UpdateQnt,AddQnt} = CartSlice.actions

export default CartSlice.reducer