import React from "react";

import styles from "../../styles";

import offerImageOne from "../../assets/images/offer-1.jpg";
import offerImageTwo from "../../assets/images/offer-2.jpg";

const SpecialOrders = () => {
  return (
    <section className={`${styles.sectionBox} md:grid md:grid-cols-2 md:gap-4`}>
      {/* box 1 */}
      <div className="relative h-[300px] overflow-hidden group">
        <img
          src={offerImageOne}
          alt=""
          className="absolute w-full max-w-full h-full object-cover align-middle duration-500 group-hover:scale-125 group-hover:rotate-6"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-[rgba(61,70,77,0.5)]">
          <h6 className="text-base font-medium uppercase text-white">
            Save 20%
          </h6>
          <h3 className="mb-4 text-3xl font-bold text-white">Special Offer</h3>
          <a
            href=""
            className="inline-block px-4 py-2 text-darkPrimary bg-primary border border-primary duration-300 hover:bg-primaryHover hover:border-primaryHover hover:text-darkSecondary"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* box 2 */}
      <div className="relative h-[300px] overflow-hidden group">
        <img
          src={offerImageTwo}
          alt=""
          className="absolute w-full max-w-full h-full object-cover align-middle duration-500 group-hover:scale-125 group-hover:rotate-6"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-[rgba(61,70,77,0.5)]">
          <h6 className="text-base font-medium uppercase text-white">
            Save 20%
          </h6>
          <h3 className="mb-4 text-3xl font-bold text-white">Special Offer</h3>
          <a
            href=""
            className="inline-block px-4 py-2 text-darkPrimary bg-primary border border-primary duration-300 hover:bg-primaryHover hover:border-primaryHover hover:text-darkSecondary"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOrders;
