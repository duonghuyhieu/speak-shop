import { ApiClient } from "./api-client";

export const getUsers = async () => {
  const response = await ApiClient.get("/user");
  return response;
};
export const addUser = async (firstName, lastName, email, password) => {
  try {
    const response = await ApiClient.post("/user", {
      firstName,
      lastName,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
