import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../../Components/Product/Breadcrum/Breadcrum";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <div>
      <Breadcrum category={product.category} name={product.name} />
    </div>
  );
};

export default Product;
