import { ApiClient } from "./api-client";

export const getUsers = async () => {
  const response = await ApiClient.get("/user");
  return response;
};
