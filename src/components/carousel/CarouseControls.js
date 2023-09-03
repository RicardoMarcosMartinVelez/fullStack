
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft, faCircle } from "@fortawesome/free-solid-svg-icons"




const CarouselControls = ({next,prev}) => {


    return (
        <>
            <div onClick={prev}
                className=" flex items-center pl-3 pr-3 rounded-l-lg bg-transparent hover:bg-gradient-to-r hover:from-black/25 hover:to-transparent transition-bg duration-300 h-full text-xl cursor-pointer">

                <FontAwesomeIcon className="cursor-pointer p-1 " icon={faAngleLeft} size="xl" style={{ "--fa-primary-color": "#7f8b9f", "--fa-secondary-color": "#e70d0d", }} />

            </div>

            <div onClick={next}
                className="flex items-center pr-3 pl-3 rounded-r-lg bg-transparent hover:bg-gradient-to-l hover:from-black/25 hover:to-transparent duration-300 h-full text-xl cursor-pointer">

                <FontAwesomeIcon className="cursor-pointer p-1" icon={faAngleRight} size="xl" style={{ "--fa-primary-color": "#7f8b9f", "--fa-secondary-color": "#adadae", }} />

            </div>

        </>

    )
}

export default CarouselControls