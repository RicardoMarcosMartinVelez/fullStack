import Product from "../SoppingCart/Product";
import Image from "next/image";
import { TYPES } from "@/Actions/ShoppingActions";
import { data, info } from "autoprefixer";


//logica para el funcionamiento del modal y la ventana de confirmacion

const Modal = ({isVisible, onClose, addToCart, data, styles}) => {

  const {cardStyle, buttonStyle} = styles
  
const {name, id, image, info, price} = data;
    if (!isVisible) { return null;
        
    }

    const confirmAdd = () => {
      let addOk= window.confirm(`quieres agregar al carrito ${name}?`)
       if (addOk) {
        addToCart (data)
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
        <div className='w-[400px] flex flex-col'>
            <button className='text-zinc-500 text-xl place-self-end'onClick={() => onClose()}>X</button>
        <div className= {cardStyle}> 
        <h2><b>{name}</b></h2>
        <Image className="border-2 border-orange-300" src ={image} alt= {name} width ="150" height="100"/>
        <p className="m-5">{info}</p>
        <p className="m-3 text-3xl"><b>$ {price}</b></p>
         <button className={buttonStyle} onClick={() => confirmAdd(id)}>Agregar al Carrito</button>
        </div>
        </div>
        </div>
  )
};
};
export default Modal;
