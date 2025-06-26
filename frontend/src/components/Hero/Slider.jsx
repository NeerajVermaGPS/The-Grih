import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../styles/css/swiper.css"
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Slider() {
    const sliderData = [
        {
            id: 1,
            name: "Elegant 3BHK Apartment",
            image: "/assets/images/properties/property1.jpg",
            small_desc: "Malviya Nagar, Jaipur",
            link: "#"
        },
        {
            id: 2,
            name: "Luxury Villa with Garden",
            image: "/assets/images/properties/property2.jpg",
            small_desc: "Whitefield, Bengaluru",
            link: "#"
        },
        {
            id: 3,
            name: "Affordable 2BHK Flat",
            image: "/assets/images/properties/property3.jpg",
            small_desc: "Kharadi, Pune",
            link: "#"
        }
    ]
    return (
        <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} effect={'fade'} loop={true} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Autoplay, Navigation, EffectFade]} >
            {
                sliderData.map(slide =>
                    <SwiperSlide key={slide.id}>
                        <img src={slide.image} alt={slide.name} />
                        <div className="swiper-middle-content display-row align-items-end">
                            <div className="swiper-middle-left column">
                                <h3 className='sff display-row'>0{slide.id} <div></div> {slide.name}</h3>
                                <p className='sff'>{slide.small_desc}</p>
                            </div>
                            <div className="swiper-middle-right">
                                <button className='smr-btn center'><img src='/assets/icons/next.svg' /></button>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default Slider
