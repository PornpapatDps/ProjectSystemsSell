import React from "react";
import Slider from "react-slick";
import Image1 from "../../../assets/SA/fish1.png";
import Image2 from "../../../assets/SA/shrimp1.png";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "เลี้ยงไม้น้ำก็แล้ว...เหมือนขาดอะไรไป ???",
      title: "ลองเลี้ยง...ปะปะ...ปา",
      title2: "ปลาน้ำจืด",

    },
    {
      id: 2,
      img: Image2,
      subtitle: "ไม้น้ำก็มี..ปลาก็มีแล้ว",
      title: "ลองไหม..ลองเลี้ยง..",
      title2: "กุ้งแคระ",
      
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] 
        hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {heroData.map((data) => (
              <div key={data.id} className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div
                  className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 
                  text-center sm:text-right order-2 sm:order-1 relative 
                  translate-y-[200px] font-[Kanit]"
                >
                  <h1 className="text-2xl sm:text-6xl lg:text-3xl font-bold">
                    {data.subtitle}
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <h1
                    className="text-5xl uppercase text-brandBlues dark:text-gray-300 
                    sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold "
                  >
                    {data.title2}
                  </h1>

                  {/* Shop Now Button */}
                  {/* <div className="mt-5">
                    <Link to="/shrimp-shop">
                      <Button 
                        text="Shop Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </Link>
                  </div> */}
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt="hero-img"
                      className="w-[600px] h-[600px] sm:h-[500px] sm:scale-110 lg:scale-125 
                      object-contain mx-auto drop-shadow-[8px_-4px_6px_rgba(0,0,0,0.4)] 
                      relative translate-y-[-120px] translate-x-[-350px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
