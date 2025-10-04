/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const products = useLoaderData(); // Use correct variable name

  return (
    <div className="p-6 max-w-[1200px] m-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-green-600 font-bold">💲{product.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
