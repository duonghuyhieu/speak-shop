import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import { getProducts } from "../services/product-service";
import { idTypeProduct } from "../constants";

const Electronic = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetProduct = async () => {
    setIsLoading(true);
    try {
      const response = await getProducts();
      setListProduct(
        response.data.filter(
          (product) => product.category.id === idTypeProduct.ELECTRONIC
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetProduct();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Content loading={isLoading} listProduct={listProduct} title="Electronic" />
  );
};
export default Electronic;
