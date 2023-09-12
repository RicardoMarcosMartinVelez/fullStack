import Product from "../SoppingCart/Product";
import Image from "next/image";
import { TYPES } from "@/Actions/ShoppingActions";


//logica para el funcionamiento del modal y la ventana de confirmacion

const Modal = ({isVisible, onClose, addToCart, id, detalles, image, name}) => {
    if (!isVisible) { return null;
        
    }

    const confirmAdd = (id) => {
      let addOk= window.confirm(`quieres agregar al carrito ${name}?`)
       if (addOk) {
        addToCart (Product)
        onClose ()
       } 
       else {
        onClose()
       }
      }
    
{
  return (
    <div  className='fixed inset-0 bg-black bg-opacity-25 
    backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end'onClick={() => onClose()}>X</button>
        <div className='bg-orange-400 p-5 flex flex-col items-center rounded'> 
        <h2><b>{name}</b></h2>
        <Image src ={image} width ="250" height="250"/>
        <p className="m-5">{detalles}</p>
         <button className='text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'onClick={() => confirmAdd(id)}>Agregar al Carrito</button>
        </div>
        </div>
        </div>
  )
};
};
export default Modal;