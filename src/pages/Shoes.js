import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import { getProducts } from "../Services/product-service";

const Shoes = () => {
  const [listProduct, setListProduct] = useState([]);

  const handleGetProduct = async () => {
    const response = await getProducts();
    setListProduct(
      response.data.filter((product) => product.category.id === 4)
    );
  };

  useEffect(() => {
    handleGetProduct();
    window.scrollTo(0, 0);
  }, []);

  return <Content listProduct={listProduct} title="Shoes" />;
};
export default Shoes;
