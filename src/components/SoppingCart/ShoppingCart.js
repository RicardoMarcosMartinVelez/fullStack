

import { TYPES } from '@/Actions/ShoppingActions'
import { useReducer } from 'react'
import { ShoppingReducer, MenuInitialState } from '@/Reducer/ShoppingReducer'
import Product from './Product'
import CartItem from './CartItem'
import Modal from '../Modal/Modal'


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
   <h2>Menu</h2>
   <h3>Productos</h3>
   <div className="menu grid grid-cols-2 content-around ">
    {
        products.map(product => <Product key={product.id} data={product} addToCart = {addToCart}/>)

    }
   </div >
   <div className=' bg-orange-400 shadow-xl text-white m-5 p-3 rounded-lg items-center'>
    <h2>Carrito de compras</h2>
    <h3>Tu pedido</h3>
    <div className="flex  p-3 m-5 items-center">
      {
        cart.map((item, index) => <CartItem key={index} item ={item} deleteFromCart ={deleteFromCart}/>)
      }

    </div>
    <button className= 'text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={resetCart}>Limpiar Carrito</button>
  </div>
  
  </>
  )
}

export default ShoppingCart