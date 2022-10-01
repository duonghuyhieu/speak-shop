import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailProduct from "../components/DetailProduct";
import { getProductById } from "../Services/product-service";

const DetailProductPage = () => {
  const { idProduct } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const handleGetData = async () => {
    setIsLoading(true);
    try {
      const response = await getProductById(idProduct);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
    window.scrollTo(0, 0);
  }, [idProduct]);

  return (
    <DetailProduct
      loading={isLoading}
      title="Detail Product"
      data={data}
      idProduct={idProduct}
    />
  );
};
export default DetailProductPage;
