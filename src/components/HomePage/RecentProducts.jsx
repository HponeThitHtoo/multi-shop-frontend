import React from "react";

import styles from "../../styles";

import Product from "./Product";

const recentProductsArray = [
  {
    id: 1,
    name: "Nikkon Camera",
    image: "./src/assets/images/nikkon-camera-1.jpg",
    price: 123.0,
    rating: 5,
  },
  {
    id: 2,
    name: "Blue Long Sleeve Men Shirt",
    image: "./src/assets/images/blue-long-sleeve-men-shirt-1.jpg",
    price: 123.0,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Electric Lamp",
    image: "./src/assets/images/electric-lamp-1.jpg",
    price: 123.0,
    rating: 3.5,
  },
  {
    id: 4,
    name: "Nike Men Sneaker",
    image: "./src/assets/images/nike-men-sneaker-1.jpg",
    price: 123.0,
    rating: 3,
  },
  {
    id: 5,
    name: "Electric Drone",
    image: "./src/assets/images/electric-drone-1.jpg",
    price: 123.0,
    rating: 5,
  },
  {
    id: 6,
    name: "Silver Men Watch",
    image: "./src/assets/images/silver-men-watch-1.jpg",
    price: 123.0,
    rating: 4.5,
  },
  {
    id: 7,
    name: "Black Long Sleeve Women Shirt",
    image: "./src/assets/images/black-long-sleeve-women-shirt-1.jpg",
    price: 123.0,
    rating: 3.5,
  },
  {
    id: 8,
    name: "Curology Lotion Set",
    image: "./src/assets/images/curology-lotion-set-1.jpg",
    price: 123.0,
    rating: 3,
  },
];

const RecentProducts = () => {
  return (
    <section className={`${styles.sectionBox}`}>
      <h2 className="section-title relative uppercase font-bold text-3xl text-darkPrimary mb-6">
        <span className="bg-secondary pr-4">Recent Products</span>
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {recentProductsArray.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecentProducts;
