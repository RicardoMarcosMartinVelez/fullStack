import Image from "next/image";
import { images } from "../../../next.config";




const Product = ({data, addToCart}) => {

    const {name, price, id} = data;

  return (
    <figure className="product bg-orange-400 border-black m-3 shadow-xl rounded-md text-black">
        <img src {...images} />
        <h4>{name}</h4>
        <h5 >$ {price}</h5>
        <button onClick={() => addToCart(id)}>Agregar</button>
    </figure>
  );
};

export default Product;