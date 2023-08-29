



export const MenuInitialState = {
    products: [
        {id:1, name: "Hamburguesa Vegana", price: 2500,},
        {id:2, name: "Hamburguesa Doble", price: 2700},
        {id:3, name: "Hamburguesa Simple", price: 2200},
        {id:4, name: "Hamburguesa Cheddar", price: 2900},
        {id:5, name: "Hamburguesa Bacon", price: 2900},
        {id:6, name: "Hamburguesa Triple", price: 3300},
        {id:7, name: "Pizza de Muzza", price: 3000},
        {id:8, name: "Pizza de Ternera", price: 3500},
        {id:9, name: "Pizza Primavera", price: 3500},
        {id:10, name: "Pizza con Jamon Ahumado", price: 3700},
        {id:11, name: "Empanadas de Carne", price: 300},
        {id:12, name: "Empanadas de Pollo", price: 300},
        {id:13, name: "Empanadas de Jamon y Queso", price: 250},
        {id:14, name: "Empanadas de Ternera", price: 350},
    ],
    cart: [],
};

export function ShoppingReducer(satate, action){
    switch(action, type){
        case TYPES.ADD_TO_CART:{}
        case TYPES.DELETE_ALL_PRODUCTS: {}
        case TYPES.DELETE_ONE_PRODUCT: {}
        case TYPES.RESET_CART: {}
        case TYPES.ADD_CUPON: {}
        case TYPES.ENLARGE_COMBO:{}
        default :
            return state;
    }
}