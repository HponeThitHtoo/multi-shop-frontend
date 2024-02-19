import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles";

const categoriesArray = [
  {
    id: 1,
    name: "Jewellery",
    items: "100 products",
    image: "./src/assets/images/jewelleries-category.png",
  },
  {
    id: 2,
    name: "Digital Products",
    items: "100 products",
    image: "./src/assets/images/digital-products-category.jpg",
  },
  {
    id: 3,
    name: "Women Shoes",
    items: "100 products",
    image: "./src/assets/images/women-shoes-category.jpg",
  },
  {
    id: 4,
    name: "Women Shirts",
    items: "100 products",
    image: "./src/assets/images/women-shirts-category.jpg",
  },
  {
    id: 5,
    name: "Women Pants",
    items: "100 products",
    image: "./src/assets/images/women-pants-category.png",
  },
  {
    id: 6,
    name: "Women Skirts",
    items: "100 products",
    image: "./src/assets/images/women-skirts-category.png",
  },
  {
    id: 7,
    name: "Skin Cares",
    items: "100 products",
    image: "./src/assets/images/skincares-category.jpg",
  },
  {
    id: 8,
    name: "Men Shirts",
    items: "100 products",
    image: "./src/assets/images/men-shirts-category.jpg",
  },
  {
    id: 9,
    name: "Men Pants",
    items: "100 products",
    image: "./src/assets/images/men-pants-category.png",
  },
  {
    id: 10,
    name: "Men Shoes",
    items: "100 products",
    image: "./src/assets/images/men-shoes-category.jpg",
  },
  {
    id: 11,
    name: "Men Watches",
    items: "100 products",
    image: "./src/assets/images/men-watches-category.jpg",
  },
  {
    id: 12,
    name: "Women Watches",
    items: "100 products",
    image: "./src/assets/images/women-watches-category.jpg",
  },
];

const Categories = () => {
  return (
    <section className={`${styles.sectionBox}`}>
      <h2 className="section-title relative uppercase font-bold text-3xl text-darkPrimary mb-6">
        <span className="bg-secondary pr-4">Categories</span>
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3  lg:grid-cols-4">
        {categoriesArray.map((item) => (
          <Category key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const Category = ({ item }) => {
  return (
    <Link>
      <div
        className="flex items-center bg-white mb-6 sm:mb-0 group"
        key={item.name}
      >
        <div className="w-[100px] h-[100px] overflow-hidden">
          <img
            src={item.image}
            alt=""
            className="max-w-full h-auto align-middle transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
          />
        </div>
        <div className="grow pl-4">
          <h6 className="text-darkPrimary leading-5 font-medium text-base">
            {item.name}
          </h6>
          <small className="text-darkSecondary font-normal text-[80%]">
            {item.items}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
