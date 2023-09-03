

const CartItem = ({item, deleteFromCart}) => {
const {name, price, id, image, quantity}= item;

    return(
        <figure className="cart-item bg-orange-400 border-#362435 m-3 shadow-xl rounded-md text-black">
            <img src={image}/>
            <h4>{name}</h4>
            <h5>$ {price} X {quantity} = {price * quantity}</h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno </button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos </button>
        </figure>
    )
}
export default CartItem;