import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination ,EffectCoverflow} from "swiper/modules";

function Carousel() {
  return (
    <div className="h-auto">
      <h1 className="cartext">
        Luxury Resort Properties
        <br />
        Available For Investment
      </h1>
      <Swiper
        // autoHeight={true}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        modules={[Navigation,EffectCoverflow,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-auto pb-10 flex flex-col items-center">
            <h1 className="carhead">Grand</h1>
            <h3 className="carcontent">3 Bedroom Pool Villa</h3>
            <div>
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/07/Component-673-1.jpg"
                alt=""
                style={{height:'400px'}}
              
              />
            </div>

            <h1 className="carhead">Price Start From 530 Juta</h1>
            <div className="button2">
              <a href="">View Villa</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto pb-10 flex flex-col items-center">
            <h1 className="carhead">Classic</h1>
            <h3 className="carcontent">3 Bedroom Pool Villa</h3>
            <div>
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/07/Component-677.jpg"
                alt=""
                style={{height:'400px'}}

              />
            </div>
            <h1 className="carhead">Price Start From 290 Juta</h1>
            <div className="button2">
              <a href="">View Villa</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto pb-10 flex flex-col items-center">
            <h1 className="carhead">Hillside Sea View</h1>
            <h3 className="carcontent">1 Bedroom Pool Villa</h3>
            <div>
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/07/Component-679-1.jpg"
                alt=""
                style={{height:'400px'}}
              
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto flex flex-col items-center pb-10">
            <h1 className="carhead">1 & 2 Bedroom</h1>
            <h3 className="carcontent">Grand Suites</h3>
            <div>
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/07/Component-682.jpg"
                    alt=""
                style={{height:'400px'}}

              
              />
            </div>
            <h1 className="carhead">Price Start From 230 Juta</h1>
            <div className="button2">
              <a href="">View Villa</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-auto pb-10 flex flex-col items-center">
            <h1 className="carhead">1 & 2 Bedroom</h1>
            <h3 className="carcontent">Deluxe Suites</h3>
            <div>
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/07/Component-686.jpg"
                alt=""
                style={{height:'400px'}}

              
              />
            </div>
            <h1 className="carhead">Price Start From 185 Juta</h1>
            <div className="button2">
              <a href="">View Villa</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-auto pb-10 flex flex-col items-center">
            <h1 className="carhead">Royal Garden</h1>
            <h3 className="carcontent">3 Bedroom Pool Villa</h3>
            <div>
              <img
                src="https://www.tiarahana.com/wp-content/uploads/2023/07/Group-212.jpg"
                alt=""
                style={{height:'400px'}}

                
              />
            </div>
            <h1 className="carhead">Price Start From 145 Juta</h1>
            <div className="button2">
              <a href="">View Villa</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     
    </div>
  );
}

export default Carousel;
