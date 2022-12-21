import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export { ApiClient };
