import React from "react";
import { Loading } from "../Loading";
import ProductItem from "../ProductItem";

import "./Content.css";

const Content = ({ listProduct = [], title, loading }) => {
  return (
    <>
      {loading ? (
        <>
          <h1 className="Content__title"> {title} </h1>
          <div className="Content__container">
            {Array.apply(null, Array(10)).map((item, index) => (
              <Loading className="Content__container-loading" />
            ))}
          </div>
        </>
      ) : (
        <div className="Content">
          <h1 className="Content__title"> {title} </h1>
          <div className="Content__container">
            {listProduct?.length > 0 &&
              listProduct?.map((item, index) => {
                if (item.images[1]) {
                  return (
                    <ProductItem
                      key={index}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      img={item.images[1]}
                    />
                  );
                }
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
