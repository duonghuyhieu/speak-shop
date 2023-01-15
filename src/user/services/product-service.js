import { ApiClient } from "./api-client";

export const getProducts = async () => {
  const response = await ApiClient.get("/product");
  return response;
};

export const getProductById = async (id) => {
  const response = await ApiClient.get(`/product/${id}`);
  return response;
};
