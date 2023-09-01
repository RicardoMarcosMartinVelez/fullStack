

import { TYPES } from '@/Actions/ShoppingActions'
import React from 'react'
import { useReducer } from 'react'
import { ShoppingReducer, MenuInitialState } from '@/Reducer/ShoppingReducer'
import Product from './Product'
import CartItem from './CartItem'


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(ShoppingReducer, MenuInitialState)
  
  const {products, cart} = state;

  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

  const deleteFromCart = (id, all = false) =>{
    if (all) {
      dispatch({ type: TYPES.DELETE_ALL_PRODUCTS, payload: id })
    }
    else {
      dispatch({ type: TYPES.DELETE_ONE_PRODUCT, payload: id })
    }
  }
  const resetCart = () => dispatch({type: TYPES.RESET_CART})

  

  
 
 
  return(
   <>
   <h2>Carrito de compras</h2>
   <h3>Productos</h3>
   <div className="menu">
    {
        products.map(product => <Product key={product.id} data={product} addToCart = {addToCart}/>)

    }
   </div>
    <h3>Tu pedido</h3>
    <div className="box">
      {
        cart.map((item, index) => <CartItem key={index} item ={item} deleteFromCart ={deleteFromCart}/>)
      }

    </div>
    <button onClick={resetCart}>Limpiar Carrito</button>

  </>
  )
}

export default ShoppingCart