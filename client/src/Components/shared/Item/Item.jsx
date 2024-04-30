import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} className="img-fluid" />
      </Link>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          <p>${props.new_price}</p>
        </div>
        <div className="item-price-old">
          <p>&{props.old_price}</p>
        </div>
      </div>
      <button onClick={props.clicked}>Add to Cart</button>
    </div>
  );
};

export default Item;
