
import { useState } from "react"
import CarouselItems from "./CarouselItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft, faCircle } from "@fortawesome/free-solid-svg-icons"

const items = [{
    id: 1,
    image: "https://imagenes.elpais.com/resizer/xOE7Oeshes4HMCo0BjguULLDLdA=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4UZ7YMWXB5VGX2IEDT4VCLK7KU.jpg",
    text: "enlace 1",

}, {
    id: 2,
    image: "https://img.freepik.com/fotos-premium/hermosa-cordillera-refleja-ia-generativa-aguas-tranquilas_188544-9117.jpg",
    text: "enlace, descripcion 2",

}, {
    id: 3,
    image: "https://fondosmil.com/fondo/17009.jpg",
    text: "enlace, descripcion 3",

}, {
    id: 4,
    image: "https://wallpaperaccess.com/full/13190.jpg",
    text: "enlace, descripcion 4",

}, {
    id: 5,
    image: "https://phototravel.es/wp-content/uploads/viajar-etiopia.jpg",
    text: "enlace, descripcion 5",

}]

const Carousel = () => {

    // const [item, setItems] = useState(item)
    const [activeIndex, setActiveIndex] = useState(2)


    const handleNext = () => {


        setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0);


        console.log(activeIndex)
    }
    const handlePrev = () => {



        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1)


        console.log(activeIndex)
    }

    const goToItem=(e)=> setActiveIndex(e)

    return (
        <section className="pt-20 pb-20 w-full ">
            <div className=" h-[400px] w-full">
                <div style={{
                    background: `url(${items[activeIndex].image}) no-repeat 80% center/cover`,
                }}
                    className="flex justify-between bg-black h-full w-[90%] sm:w-[80%] xl:w-[70%] 2xl:w-[60%] items-center duration-300 relative m-auto rounded-lg overflow-auto">

                    <div className="bg-transparent hover:bg-black/50 absolute bottom-0 pl-[10%] w-full pb-7">
                        <a href="" className=" text-xl">{items[activeIndex].text}</a>
                    </div>

                    <div onClick={handlePrev}
                        className=" flex items-center pl-3 pr-3 rounded-l-lg bg-transparent hover:bg-gradient-to-r hover:from-black/25 hover:to-transparent transition-bg duration-300 h-full text-xl cursor-pointer">

                        <FontAwesomeIcon className="cursor-pointer p-1 " icon={faAngleLeft} size="xl" style={{ "--fa-primary-color": "#7f8b9f", "--fa-secondary-color": "#e70d0d", }} />

                    </div>

                    <div onClick={handleNext}
                        className="flex items-center pr-3 pl-3 rounded-r-lg bg-transparent hover:bg-gradient-to-l hover:from-black/25 hover:to-transparent duration-300 h-full text-xl cursor-pointer">

                        <FontAwesomeIcon className="cursor-pointer p-1" icon={faAngleRight} size="xl" style={{ "--fa-primary-color": "#7f8b9f", "--fa-secondary-color": "#adadae", }} />

                    </div>

                </div>
                <div className="flex justify-center pt-5 ">

                    {items.map((item, index) => (
                        <span key={index} onClick={()=>goToItem(index)} className="px-2 cursor-pointer">
                            <FontAwesomeIcon  icon={faCircle} size="sm" style={{ color: "#262627", }} />
                        </span>))}

                </div>

            </div>

        </section>

    )
}

export default Carousel