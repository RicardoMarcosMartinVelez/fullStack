

const CartItem = ({item, deleteFromCart}) => {
const {name, price, id, image, quantity}= item;

    return(
        <figure className="bg-orange-400 border-#362435 m-5 p-5 shadow-xl rounded-md text-white">
            <img src={image}alt="200"width ="200" height="200"/>
            <h4>{name}</h4>
            <h5>$ {price} X {quantity} = {price * quantity}</h5>
            <button className= 'text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={() => deleteFromCart(id)}>Eliminar uno </button>
            <button className= 'text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={() => deleteFromCart(id, true)}>Eliminar todos </button>
        </figure>
    )
}
export default CartItem;