import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouseL() {
    const responsive = {
        superLargeDesktop: {
          // Breakpoints del Responsive
          breakpoint: { max: 1920, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        }
      };
    return (
        <div class="owl_carousel">
            <Carousel 
            responsive={responsive} 
            showDots={true}
            infinite={true}
            swipeable={false} 
            removeArrowOnDeviceType={["tablet", "mobile"]}
            autoPlay 
            autoPlaySpeed={3000}
            >
            <div class="mr-2">
                <img
                 src="/images/carousel/img1.png">
                 </img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img2.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img3.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img4.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img5.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img6.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img7.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img8.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img9.png"></img>
            </div>
            <div class="mr-2">
                <img src="/images/carousel/img10.png"></img>
            </div>
            </Carousel>;
        </div>

    )
}