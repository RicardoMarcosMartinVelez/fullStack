import { TYPES } from "@/Actions/ShoppingActions";
import axios from "axios";
import { useReducer, useEffect } from "react";
import { ShoppingReducer, MenuInitialState } from "@/Reducer/ShoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import { data } from "autoprefixer";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(ShoppingReducer, MenuInitialState);

  const { products, cart } = state;

  // solicitud de datos a db.json

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:4000/products",
      cart: "http://localhost:4000/cart",
    };
    const responseProducts = await axios.get(ENDPOINTS.products),
      responseCart = await axios.get(ENDPOINTS.cart);

    const productsList = responseProducts.data,
      cartItems = responseCart.data;

    const data = {
      products: productsList,
      cart: cartItems,
    };

    dispatch({ type: TYPES.READ_STATE, payload: data });
  };

  useEffect(() => {
    updateState();
  }, []);

  

  const addToCart = async (product) => {

    const ENDPOINT = "http://localhost:4000/cart";

    const OPTIONS = {
      method: "POST",
      headers: { "content-type": "application/json"},
      data: JSON.stringify(product),
    };
    await axios(ENDPOINT, OPTIONS);

    dispatch({ type: TYPES.ADD_TO_CART, payload: product.id });
    updateState();
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.DELETE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.DELETE_ONE_PRODUCT, payload: id });
    }
  };
  const resetCart = () => dispatch({ type: TYPES.RESET_CART }, updateState());

  return (
    <>
      <h2><b>Menu</b></h2>
      <h3><b>Productos</b></h3>
      <div className="menu grid grid-cols-3 content-around ">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <div className=" bg-orange-400 shadow-xl text-white m-5 p-3 rounded-lg items-center">
        <h2><b>Carrito de compras</b></h2>
        <h3><b>Tu pedido</b></h3>
        <div className="flex  p-3 m-5 items-center">
          {cart.map((item, index) => (
            <CartItem key={index} item={item} deleteFromCart={deleteFromCart} />
          ))}
        </div>
        <button
          className="text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
          onClick={resetCart}
        >
          Limpiar Carrito
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;