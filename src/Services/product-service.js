import { ApiClient } from "./api-client";

export const getProducts = async () => {
  const response = await ApiClient.get("/products");
  return response;
};

export const getProductById = async (id) => {
  const response = await ApiClient.get(`/products/${id}`);
  return response;
};
