import React, { useState, useEffect } from "react";

import { idTypeProduct } from "../constants";
import Content from "../components/Content";
import { getProducts } from "../services/product-service";

const Clothes = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleGetProduct = async () => {
    setIsLoading(true);
    try {
      const response = await getProducts();
      setListProduct(
        response.data.filter(
          (product) => product.category.id === idTypeProduct.CLOTHES
        )
      );
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetProduct();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Content loading={isLoading} listProduct={listProduct} title="Clothes" />
  );
};
export default Clothes;
