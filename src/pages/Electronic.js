import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import { getProducts } from "../Services/product-service";

const Electronic = () => {
  const [listProduct, setListProduct] = useState([]);

  const handleGetProduct = async () => {
    const response = await getProducts();
    setListProduct(
      response.data.filter((product) => product.category.id === 2)
    );
  };

  useEffect(() => {
    handleGetProduct();
    window.scrollTo(0, 0);
  }, []);

  return <Content listProduct={listProduct} title="Electronic" />;
};
export default Electronic;
