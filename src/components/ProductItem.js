import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ProductItem.css";

function ProductItem(props) {
  const navigate = useNavigate();
  const handelNavigateToDetailPage = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };
  return (
    <div
      className="PI__container"
      onClick={() => handelNavigateToDetailPage(props.id)}
    >
      <img src={props.img} alt="" />
      <div className="PI__info">
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
