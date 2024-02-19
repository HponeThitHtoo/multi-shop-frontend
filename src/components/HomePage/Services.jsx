import React from "react";
import {
  FaCheck,
  FaExchangeAlt,
  FaPhoneVolume,
  FaShippingFast,
} from "react-icons/fa";

import styles from "../../styles";

const Services = () => {
  return (
    <section
      className={`md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 ${styles.sectionBox}`}
    >
      <div className="flex justify-start items-center bg-white p-8 mb-6 md:mb-0">
        <FaCheck size={40} className="mr-6 text-primary" />
        <h5 className="text-darkPrimary font-medium text-xl">
          Quality Product
        </h5>
      </div>
      <div className="flex justify-start items-center bg-white p-8 mb-6 md:mb-0">
        <FaShippingFast size={40} className="mr-6 text-primary" />
        <h5 className="text-darkPrimary font-medium text-xl">Free Shipping</h5>
      </div>
      <div className="flex justify-start items-center bg-white p-8 mb-6 md:mb-0">
        <FaExchangeAlt size={40} className="mr-6 text-primary" />
        <h5 className="text-darkPrimary font-medium text-xl">14-Day Return</h5>
      </div>
      <div className="flex justify-start items-center bg-white p-8 mb-6 md:mb-0">
        <FaPhoneVolume size={40} className="mr-6 text-primary" />
        <h5 className="text-darkPrimary font-medium text-xl">24/7 Support</h5>
      </div>
    </section>
  );
};

export default Services;
