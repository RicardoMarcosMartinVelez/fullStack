import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Product = ({data, addToCart}) => {

    const {name, price, id, image} = data;

    const [showModal, setShowModal] = useState (false)

  return (
    <figure className="bg-orange-400 shadow-xl rounded-md text-white grid m-5 p-3">
        <Image src ={image} alt="200"width ="200" height="200"/>
        <h4>{name}</h4>
        <h5 >$ {price}</h5>
        <button className='text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'onClick ={() => setShowModal(true)}>Ver</button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} id ={id} addToCart={addToCart}/>
    </figure>
    
  );
  
};

export default Product;