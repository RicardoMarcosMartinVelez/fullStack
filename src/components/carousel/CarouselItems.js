




const CarouselItems = ({data,valor,arreglo}) => {
    
    const {image,text} =data
    // const currentItem=arreglo[valor]
    // const {image,text} =currentItem

    return (
        
        <div className="bg-gray-400 w-full h-80 duration-500">
            <img className="w-full object-cover h-full duration-500" src={image}></img>
            <h3 className="text-black ">{text}</h3>
        </div>
    )
}

export default CarouselItems