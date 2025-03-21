import Slider from "react-slick";
import Image1 from "../../../assets/SA/f4.png";
import Image2 from "../../../assets/SA/RedB.png";

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
    <div className="container mx-auto px-4">
      <div
        className="overflow-hidden rounded-3xl min-h-[500px] sm:min-h-[600px] 
        hero-bg-color flex justify-center items-center"
      >
        <div className="w-full">
          <Slider {...settings}>
            {heroData.map((data) => (
              <div
                key={data.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-6"
              >
                {/* 📌 Text Section */}
                <div
                  className="flex flex-col gap-4 text-center lg:text-left 
                  order-2 lg:order-1 font-[Kanit] lg:translate-y-[170px] sm:translate-y-[100px] 
                  lg:translate-x-[70px] 
                  "
                >
                  <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                    {data.subtitle}
                  </h1>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    {data.title}
                  </h1>
                  <h1
                    className="text-4xl sm:text-6xl lg:text-7xl uppercase 
                    text-brandBlues dark:text-gray-300 font-bold"
                  >
                    {data.title2}
                  </h1>
                </div>

                {/* 🖼️ Image Section */}
                <div className="flex justify-center order-1 lg:order-4 sm:order-2">
                  <div className="relative">
                    <img
                      src={data.img}
                      alt="hero-img"
                      className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] 
                      lg:translate-x-[100px] lg:translate-y-[-70px] 
                      object-contain mx-auto drop-shadow-xl"
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
