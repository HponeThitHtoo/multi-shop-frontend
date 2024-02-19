import React from "react";
import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import styles from "../styles";

const Footer = () => {
  return (
    <footer className="px-12 bg-darkPrimary text-secondary">
      <div className="grid grid-cols-4 gap-2 pt-12">
        <div className="col-span-full lg:col-span-1 mb-12">
          <h5 className="mb-6 text-secondary uppercase font-medium text-xl">
            Get In Touch
          </h5>
          <p className="mb-6">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <p className="mb-2 flex items-center">
            <FaMapMarkerAlt className="text-primary mr-4" /> 123 Street, New
            York, USA
          </p>
          <p className="mb-2 flex items-center">
            <FaEnvelope className="text-primary mr-4" /> info@example.com
          </p>
          <p className="mb-0 flex items-center">
            <FaPhoneAlt className="text-primary mr-4" /> +012 345 67890
          </p>
        </div>
        <div className="col-span-full lg:col-start-2 lg:col-span-3 grid grid-cols-3 gap-2">
          <div className="col-span-full md:col-span-1 mb-12">
            <h5 className="mb-6 text-secondary uppercase font-medium text-xl">
              Quick Shop
            </h5>
            <div className="flex flex-col justify-start">
              <Link className="flex items-center mb-2">
                <FaAngleRight className="mr-2" /> Home
              </Link>
              <Link className="flex items-center mb-2">
                <FaAngleRight className="mr-2" /> Our Shop
              </Link>
              <Link className="flex items-center mb-2">
                <FaAngleRight className="mr-2" /> Shop Detail
              </Link>
              <Link className="flex items-center mb-2">
                <FaAngleRight className="mr-2" /> Shopping Cart
              </Link>
              <Link className="flex items-center mb-2">
                <FaAngleRight className="mr-2" /> Checkout
              </Link>
              <Link className="flex items-center mb-2">
                <FaAngleRight className="mr-2" /> Contact Us
              </Link>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 mb-12">
            <div className="col-span-full md:col-span-1">
              <h5 className="mb-6 text-secondary uppercase font-medium text-xl">
                My Account
              </h5>
              <div className="flex flex-col justify-start">
                <Link className="flex items-center mb-2">
                  <FaAngleRight className="mr-2" /> Home
                </Link>
                <Link className="flex items-center mb-2">
                  <FaAngleRight className="mr-2" /> Our Shop
                </Link>
                <Link className="flex items-center mb-2">
                  <FaAngleRight className="mr-2" /> Shop Detail
                </Link>
                <Link className="flex items-center mb-2">
                  <FaAngleRight className="mr-2" /> Shopping Cart
                </Link>
                <Link className="flex items-center mb-2">
                  <FaAngleRight className="mr-2" /> Checkout
                </Link>
                <Link className="flex items-center mb-2">
                  <FaAngleRight className="mr-2" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 mb-12">
            <h5 className="mb-6 text-secondary uppercase font-medium text-xl">
              Newsletter
            </h5>
            <p className="mb-4">
              Duo stet tempor ipsum sit amet magna ipsum tempor est
            </p>
            <form action="">
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Email Address"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="submit"
                    className="h-full rounded-md border-0 bg-primary py-0 px-2 text-darkPrimary "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <h6 className="text-secondary uppercase text-base font-medium mt-6 mb-4">
              Follow Us
            </h6>
            <div className="flex">
              <Link
                className={`${styles.btnSquare} bg-primary text-darkPrimary cursor-pointer mr-2`}
              >
                <FaTwitter />
              </Link>
              <Link
                className={`${styles.btnSquare} bg-primary text-darkPrimary cursor-pointer mr-2`}
              >
                <FaFacebook />
              </Link>
              <Link
                className={`${styles.btnSquare} bg-primary text-darkPrimary cursor-pointer mr-2`}
              >
                <FaLinkedin />
              </Link>
              <Link
                className={`${styles.btnSquare} bg-primary text-darkPrimary cursor-pointer`}
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-t-[rgba(256, 256, 256, .1)] md:grid md:grid-cols-2">
        <p className="text-center md:text-left mb-4 md:mb-0 text-secondary">
          &copy; <Link className="text-primary">Domain</Link>. All Rights
          Reserved. Designed by{" "}
          <Link to="https://htmlcodex.com/">HTML Codex</Link>
        </p>
        <p className="mb-4 md:mb-0">
          <img
            src="/src/assets/images/payments.png"
            alt=""
            className="mx-auto md:mx-0 md:ml-auto"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
