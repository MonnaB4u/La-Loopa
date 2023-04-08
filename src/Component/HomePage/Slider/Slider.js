
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";
import data from '../../FakeData/Slider'

const Slider = () => {
    const [Data, setData] = useState(data)

    return (
        <div className="Slide">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="Style">
                    {
                        Data.map((each, i) => <>
                            <SwiperSlide style={{
                                backgroundImage: `url(${each.img})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                width: "200px",
                                height: "30rem",
                                objectFit: "cover",
                                maxWidth: "100%",
                                zIndex: 1
                            }}>
                                <div className="">
                                    <h4>{each.name}</h4>
                                <p className="text_c">{each.dis}</p>
                                </div>
                            </SwiperSlide>
                        </>)
                    }
                </div>


            </Swiper >
        </div >
    );
};

export default Slider;
