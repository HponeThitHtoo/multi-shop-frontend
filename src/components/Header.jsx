import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaChevronDown,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import styles from "../styles";

const categories = [
  "Dresses",
  "Shirts",
  "Jeans",
  "Swimwear",
  "Sleepwear",
  "Watches",
  "Shoes",
];

const dropDownHeight = (40 * categories.length + "px").toString();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div
        className={`flex justify-between items-center px-12 py-2 bg-secondary text-darkSecondary relative z-20`}
      >
        <div className="hidden lg:inline-flex gap-x-4">
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Help</NavLink>
          <NavLink>FAQs</NavLink>
        </div>
        <div className="flex lg:block justify-center flex-grow lg:flex-grow-0 gap-x-4">
          {/* <select name="" id="">
            <option value="">My Account</option>
            <option value="">
              <NavLink to="/sign-in">Sign In</NavLink>
            </option>
            <option value="">
              <NavLink to="/sign-up">Sign Up</NavLink>
            </option>
          </select> */}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                My Account
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/profile"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Profile
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/sign-in"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Sign In
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/sign-up"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Sign Up
                      </NavLink>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="flex lg:hidden gap-4">
            <div className="flex justify-center items-center gap-2">
              <FaHeart className="text-darkPrimary" />
              <span className="flex justify-center items-center w-6 border border-darkPrimary rounded-full text-darkPrimary">
                0
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaShoppingCart className="text-darkPrimary" />
              <span className="flex justify-center items-center w-6 border border-darkPrimary rounded-full text-darkPrimary">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-between items-center px-12 py-4 bg-white">
        <Link>
          <span className="px-2 bg-darkPrimary text-primary uppercase text-4xl font-bold">
            multi
          </span>
          <span className="px-2 bg-primary text-darkPrimary uppercase text-4xl font-bold">
            shop
          </span>
        </Link>
        <div className="flex border border-primary">
          <input
            type="text"
            name=""
            id=""
            className="xl:min-w-[20rem] px-2 py-1 outline-none text-base"
            placeholder="Search for products"
          />
          <div className="flex justify-center items-center p-2 border-l border-l-primary">
            <FaSearch />
          </div>
        </div>
        <div>
          <span className="block text-darkSecondary font-normal">
            Customer Service
          </span>
          <span className="block text-darkPrimary font-medium text-lg">
            +012 345 6789
          </span>
        </div>
      </div>

      {/* Navbar Start */}
      <nav className="hidden lg:flex items-center px-12 mb-7 bg-darkPrimary">
        <Menu as="div" className="relative">
          <Menu.Button>
            <div className="flex items-center bg-primary xl:min-w-[17rem] p-6">
              <GiHamburgerMenu />
              <h6 className="flex-grow ml-2 font-medium">Categories</h6>
              <FaChevronDown />
              {/* TODO: to add headlessui dropdown menu */}
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition-all ease-in duration-500"
            enterFrom="-translate-y-full opacity-0"
            enterTo={`translate-y-0 opacity-100`}
            leave="transition-all ease-out duration-500"
            leaveFrom={`translate-y-0 opacity-100`}
            leaveTo="-translate-y-full opacity-0"
          >
            <Menu.Items className="absolute left-0 z-10 w-full bg-white divide-y divide-gray-100  shadow-lg focus:outline-none">
              {categories.map((item) => {
                return (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <NavLink
                        to={`/${item}`}
                        className={`${
                          active
                            ? "text-[rgb(0,0,0)]"
                            : "text-[rgba(0,0,0,0.5)]"
                        } block px-4 py-2 tracking-widest capitalize hover:text-primary`}
                      >
                        {item}
                      </NavLink>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="flex justify-between items-center flex-grow">
          <div className="space-x-5 pl-10 text-secondary">
            <NavLink>Home</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Shop Detail</NavLink>
            <NavLink>Pages</NavLink>
            <NavLink>Contact</NavLink>
          </div>

          <div className="flex gap-4">
            <div className="flex justify-center items-center gap-2">
              <FaHeart className="text-primary" />
              <span className="flex justify-center items-center w-6 border rounded-full text-secondary">
                0
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaShoppingCart className="text-primary" />
              <span className="flex justify-center items-center w-6 border rounded-full text-secondary">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* mobile menu */}
      <div className="block lg:hidden mb-7 p-4 bg-darkPrimary relative">
        <div className="flex justify-between items-center w-full relative z-20">
          <Link className="block">
            <span className="px-2 bg-secondary text-darkPrimary uppercase text-4xl font-bold">
              multi
            </span>
            <span className="px-2 bg-primary text-secondary uppercase text-4xl font-bold">
              shop
            </span>
          </Link>

          <div
            className="flex justify-center items-center border border-[#ffffffc9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MdMenu size={30} className="text-[#ffffffc9]" />
          </div>
        </div>

        <div
          className={`${
            mobileMenuOpen ? "mobileMenu open" : "mobileMenu"
          } absolute left-0 bg-darkPrimary w-full z-10`}
        >
          <ul className="list-none space-y-3 p-5 text-secondary">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Shop</NavLink>
            </li>
            <li>
              <NavLink>Shop Detail</NavLink>
            </li>
            <li>
              <NavLink>Pages</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* end of mobile menu */}
    </div>
  );
};

export default Header;
