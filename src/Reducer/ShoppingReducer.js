import { TYPES } from "@/Actions/ShoppingActions";
import Image from "next/image";
import vegana from "../../public/vegeburger.jpeg"

export const MenuInitialState = {
    products: [
        {id:1, name: "Hamburguesa Vegana", 
        image :vegana, 
        info:"Hamburguesa a base de legumbres y hortalizas para disfrutar mientras cuidas el medio ambiente ", 
        price: 2500,},

        {id:2, name: "Hamburguesa Clasica", 
        image:"",
        info:"250 grs de la mejor carne Argentina en un pan super esponjoso y la mejor verdura", 
        price: 2200},

        {id:3, name: "Hamburguesa Doble", 
        image: "", 
        info:"Un permitido... con dos medallones de 250 grs. cada uno, acompañados por las verduras mas frescas", 
        price: 2700},

        {id:4, name: "Hamburguesa Triple", 
        image:"",
        info: "No te llenas con nada? tentate con esta Monstruosidad... 750grs. de vaca!", 
        price: 3300},

        {id:5, name: "Hamburguesa Cheddar", 
        image:"", 
        info:"Si algo le faltaba a una buena Hamburguesa era la salsa Cheddar con su inconfundible sabor", 
        price: 2900},

        {id:6, name: "Hamburguesa Yankee", 
        image:"", 
        info:"Ademas de la Vaca, toma tocino... asi te sentis como ahijado del tio Sam", 
        price: 2900},
        
        {id:7, name: "Pizza de Muzza", 
        image:"", 
        info:"Pizza extragrande con salsa de tomates, aceitunas y la mejor y mas abundante muzzarella del pais", 
        price: 3000},

        {id:8, name: "Pizza de Ternera", 
        image:"", 
        info:"Pizza extragrande con salsa de tomates, aceitunas, morrones, la mejor muzzarella y ademas cubierta de deliciosas fetas de ternera.", 
        price: 3500},

        {id:9, name: "Pizza Primavera", 
        image:"", 
        info:"Recien arrancas con la dieta pero moris de hambre? la solucion, salsa de tomates, rucula, choclo, tomates cherry, muzzarella... esta mal, pero no tan mal", 
        price: 3500},

        {id:10, name: "Pizza con Jamon Ahumado", 
        image:"",  
        info:"Date un gustito, pizza de muzzarella extragrande y extrasabrosa con finas fetas de jamon ahumado, un manjar", 
        price: 3700},

        {id:11, name: "Empanadas de Carne", 
        image:"", 
        info:"Algo bien argentino, empanadas de carne picada con cuchillo, el punto justo entre jugosa y riquisima", 
        price: 300},

        {id:12, name: "Empanadas de Pollo", 
        image:"", 
        info:"Si hay empanadas, hay de pollo, nunca el pollo fue tan rico como lo es aqui!", 
        price: 300},
        {id:13, name: "Empanadas de Jamon y Queso", 
        image:"", 
        info:"Jamon + queso + huevo + aceitunas + tomates cherry = que DE LI CIA!!", 
        price: 250},

        {id:14, name: "Empanadas de Ternera", 
        image:"", 
        info:"Si no las probaste aun estas a tiempo... ternera, muzzarella y morrones, imperdible", 
        price: 350},

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