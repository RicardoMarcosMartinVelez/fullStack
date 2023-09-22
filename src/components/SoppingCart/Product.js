import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";

<<<<<<< HEAD

const Product = ({data, addToCart}) => {

    const {name, price, id, image, info} = data;

    const [showModal, setShowModal] = useState (false)

  return (
    <figure className="bg-orange-400 shadow-xl rounded-md text-white grid grid-flow-dense justify-center m-10 p-3">
        <Image src ={image} alt={name}width ="200" height="200"/>
        <h3><b>{name}</b></h3>
        <h5 >$ {price}</h5>
        <button className='text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'onClick ={() => setShowModal(true)}>Ver</button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} id ={id} name ={name} image= {image} detalles = {info} addToCart={addToCart} />
=======
const Product = ({ data, addToCart, styles }) => {
  const { buttonStyle, cardStyle } = styles;
  const { name, price, image } = data;

  const [showModal, setShowModal] = useState(false);

  return (
    <figure className={cardStyle}>
      <Image
        className="border-2 border-orange-300"
        src={image}
        alt={name}
        width="250"
        height="200"
      />
      <h3>
        <b>{name}</b>
      </h3>
      <h5>$ {price}</h5>
      <button className={buttonStyle} onClick={() => setShowModal(true)}>
        Ver
      </button>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        data={data}
        addToCart={addToCart}
        styles={styles}
      />
>>>>>>> shoppingcart
    </figure>
    
  );
  
};

export default Product;
