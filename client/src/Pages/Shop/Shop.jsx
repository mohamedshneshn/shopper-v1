import React from "react";
import Hero from "../../Components/Shop/Hero/Hero";
import Popular from "../../Components/Shop/Popular/Popular";
import Offers from "../../Components/Shop/Offers/Offers";
import NewCollections from "../../Components/Shop/NewCollections/NewCollections";
import Newsletter from "../../Components/Shop/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Shop;
