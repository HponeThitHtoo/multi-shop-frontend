import React, { useEffect } from "react";

import styles from "../../styles";

const Vendors = () => {
  useEffect(() => {
    $("#owl-carousel").owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      },
    });
  }, []);

  return (
    <div className={`${styles.sectionBox}`}>
      <div id="owl-carousel" className={`owl-carousel owl-theme`}>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-1.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-2.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-3.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-4.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-5.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-6.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-7.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="bg-white p-6">
            <img src="/src/assets/images/vendor-8.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
