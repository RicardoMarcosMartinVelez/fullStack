

import { TYPES } from '@/Actions/ShoppingActions'
import React from 'react'
import { useReducer } from 'react'
import { ShoppingReducer, MenuInitialState } from '@/Reducer/ShoppingReducer'


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(ShoppingReducer, MenuInitialState)
  
  const {products, cart} = state

  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART})
  
  const deleteFromCart = () => dispatch({})
  
  const resetCart = () => dispatch({type: TYPES.RESET_CART})

  const addCupon = () => dispatch({type: TYPES.ADD_CUPON})

  const enlargecombo = () => dispatch({type: TYPES.ENLARGE_COMBO})
  
  
 
 
  return(
   <>
   <h2>Carrito de compras</h2>
   <h3>Productos</h3>
   <div className="box grid-responsive">
    {
        products.map(product => <Product key={product.id} data={product} addToCart = {addToCart}/>)

    }
   </div>
    <h3>Tu pedido</h3>
    <div className="box">
      {
        cart.map((item, index) => <CartItem key={index} item ={item}/>)
      }

    </div>
    <button>Agrandar combo</button>
    <button>Agregar cupon</button>
    <button>Limpiar Carrito</button>

  </>
  )
}

export default ShoppingCart