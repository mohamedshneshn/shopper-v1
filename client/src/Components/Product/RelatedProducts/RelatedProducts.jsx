import React from "react";
import "./RelatedProducts.css";
import data_products from "../../../Assets/data";
import Item from "../../shared/Item/Item";

const RelatedProducts = () => {
  return (
    <div className="popular container">
      <h2 className="text-center mb-4 mt-4">Related Products</h2>
      <hr
        style={{
          width: "100px",
          height: "3px",
          backgroundColor: "#000",
          margin: "0 auto 40px",
        }}
      />

      <div className="popular_items row">
        {data_products.map((product, index) => (
          <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
            <div className="card h-100">
              <Item
                id={product.id}
                image={product.image}
                name={product.name}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
