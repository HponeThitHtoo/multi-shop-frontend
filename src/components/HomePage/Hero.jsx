import { Carousel } from "flowbite-react";

import carouselImgOne from "../../assets/images/carousel-1.jpg";
import carouselImgTwo from "../../assets/images/carousel-2.jpg";
import carouselImgThree from "../../assets/images/carousel-3.jpg";
import oferImageOne from "../../assets/images/offer-1.jpg";
import oferImageTwo from "../../assets/images/offer-2.jpg";

import styles from "../../styles";

const Hero = () => {
  return (
    <section
      className={`lg:flex lg:justify-center lg:gap-7 ${styles.sectionBox}`}
    >
      <div className="lg:w-2/3 h-[430px] lg:bg-darkSecondary xl:bg-[inherit] mb-5 lg:mb-0">
        <Carousel>
          {/* first slide */}
          <div className="relative w-full h-full">
            <img
              src={carouselImgOne}
              alt="..."
              className="absolute w-full h-full object-cover object-center"
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-[#00000069]">
              <div className="text-center max-w-[65%]">
                <h1 className="text-3xl md:text-6xl font-light leading-tight text-white mb-4">
                  Men Fashion
                </h1>
                <p className="md:mx-6 md:px-6 mb-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt vitae eum dignissimos dolorem accusantium sunt?
                </p>
                <a
                  href=""
                  className="inline-block px-4 py-2 bg-transparent text-white border border-white transition duration-300 hover:bg-white hover:text-darkPrimary"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          {/* second slide */}
          <div className="relative w-full h-full">
            <img
              src={carouselImgTwo}
              alt="..."
              className="absolute w-full h-full object-cover object-center"
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-[#00000069]">
              <div className="text-center max-w-[65%]">
                <h1 className="text-3xl md:text-6xl font-light leading-tight text-white mb-4">
                  Women Fashion
                </h1>
                <p className="md:mx-6 md:px-6 mb-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt vitae eum dignissimos dolorem accusantium sunt?
                </p>
                <a
                  href=""
                  className="inline-block px-4 py-2 bg-transparent text-white border border-white transition duration-300 hover:bg-white hover:text-darkPrimary"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          {/* third slide */}
          <div className="relative w-full h-full">
            <img
              src={carouselImgThree}
              alt="..."
              className="absolute w-full h-full object-cover object-center"
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-[#00000069]">
              <div className="text-center max-w-[65%]">
                <h1 className="text-3xl md:text-6xl font-light leading-tight text-white mb-4">
                  Kids Fashion
                </h1>
                <p className="md:mx-6 md:px-6 mb-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt vitae eum dignissimos dolorem accusantium sunt?
                </p>
                <a
                  href=""
                  className="inline-block px-4 py-2 bg-transparent text-white border border-white transition duration-300 hover:bg-white hover:text-darkPrimary"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="lg:w-1/3 flex flex-col gap-y-5 lg:gap-y-7">
        <div className="h-[180px] lg:h-1/2 relative overflow-hidden group">
          <img
            src={oferImageOne}
            alt="offer one"
            className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-[1.2]"
          />

          <div className="flex flex-col justify-center items-center bg-[#00000069] absolute top-0 left-0 bottom-0 right-0">
            <h6 className="text-white uppercase font-medium">Save 20%</h6>
            <h3 className="text-white uppercase font-bold mb-3">
              Special Offer
            </h3>
            <a
              href=""
              className="block px-4 py-2 rounded-sm bg-primary hover:bg-primaryHover text-darkPrimary hover:text-darkSecondary transition duration-300 cursor-pointer"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="h-[180px] lg:h-1/2 relative overflow-hidden group">
          <img
            src={oferImageTwo}
            alt="offer one"
            className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-[1.2]"
          />

          <div className="flex flex-col justify-center items-center bg-[#00000069] absolute top-0 left-0 bottom-0 right-0">
            <h6 className="text-white uppercase font-medium">Save 20%</h6>
            <h3 className="text-white uppercase font-bold mb-3">
              Special Offer
            </h3>
            <a
              href=""
              className="block px-4 py-2 rounded-sm bg-primary hover:bg-primaryHover text-darkPrimary hover:text-darkSecondary transition duration-300 cursor-pointer"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
