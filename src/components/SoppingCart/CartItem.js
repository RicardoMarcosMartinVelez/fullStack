

const CartItem = ({item}) => {
const {name, price, id}= item;

    return(
        <div className="cart-item">
            <h4>{name}</h4>
            <h5>$ {price}</h5>
            <button>Eliminar uno</button>
            <button>Eliminar todos</button>
        </div>
    )
}