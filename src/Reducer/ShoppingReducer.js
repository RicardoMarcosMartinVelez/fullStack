import { TYPES } from "@/Actions/ShoppingActions";


export const MenuInitialState = {
    products: [
        {id:1, name: "Hamburguesa Vegana", image:"", price: 2500,},
        {id:2, name: "Hamburguesa Doble", image:"", price: 2700},
        {id:3, name: "Hamburguesa Simple", image:"", price: 2200},
        {id:4, name: "Hamburguesa Cheddar", image:"", price: 2900},
        {id:5, name: "Hamburguesa Bacon", image:"", price: 2900},
        {id:6, name: "Hamburguesa Triple", image:"", price: 3300},
        {id:7, name: "Pizza de Muzza", image:"", price: 3000},
        {id:8, name: "Pizza de Ternera", image:"", price: 3500},
        {id:9, name: "Pizza Primavera", image:"", price: 3500},
        {id:10, name: "Pizza con Jamon Ahumado", image:"",  price: 3700},
        {id:11, name: "Empanadas de Carne", image:"", price: 300},
        {id:12, name: "Empanadas de Pollo", image:"", price: 300},
        {id:13, name: "Empanadas de Jamon y Queso", image:"", price: 250},
        {id:14, name: "Empanadas de Ternera", image:"", price: 350},
    ],
    cart: [],
};

export function ShoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{

         const newItem = state.products.find(product => product.id === action.payload)   
            
         const itemInCart = state.cart.find(item => item.id === newItem.id)

        return itemInCart
            ? {
                ...state,
                cart: state.cart.map(item => item.id === newItem.id
                    ? {...item, quantity: item.quantity + 1}
                    :item
                    )
            }
            : { ...state,
                cart: [...state.cart, {...newItem, quantity : 1}]}
         
        }
        case TYPES.DELETE_ONE_PRODUCT: {
            const itemToDelete = state.cart.find(item => item.id === action.payload)
         return itemToDelete.quantity > 1
         ?{
            ...state,
                cart: state.cart.map(item => item.id === itemToDelete.id
                    ?{...item, quantity : item.quantity - 1}
                    :item
                    )

         }
         :{
            ...state,
            cart: state.cart.filter(item => item.id !== itemToDelete.id)
         }
        }
        case TYPES.DELETE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.RESET_CART: {
            return MenuInitialState
        }
        default :
            return state;
    }
}