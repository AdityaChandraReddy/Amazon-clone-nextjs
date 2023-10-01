import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:-mt-52 mx-auto ">
      {products.slice(0, 4).map((product) => {
        return (
          <Product key={product.id} product={product}>
            {product.title}
          </Product>
        );
      })}
      <img
        className="md:col-span-4"
        src="https://links.papareact.com/dyz"
        alt="sf sf sf"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => {
          return (
            <Product key={product.id} product={product}>
              {product.title}
            </Product>
          );
        })}
      </div>
      {products.slice(5, products.length).map((product) => {
        return (
          <Product key={product.id} product={product}>
            {product.title}
          </Product>
        );
      })}
    </div>
  );
}

export default ProductFeed;
