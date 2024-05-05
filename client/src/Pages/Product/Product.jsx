import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../../Components/Product/Breadcrum/Breadcrum";
import ProductDisplay from "../../Components/Product/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../Components/Product/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../Components/Product/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <div>
      <Breadcrum category={product.category} name={product.name} />
      <ProductDisplay product={product} />
      <DescriptionBox
        description={product.description}
        reviews={product.reviews}
      />
      <RelatedProducts />
    </div>
  );
};

export default Product;
