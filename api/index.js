import axios from "axios";

const API = axios.create({
  baseURL: "https://api-dev.rescounts.com/api/v1",
});

export const signup = (values) => API.post(`/users`, values);

export const signin = (values) => API.post(`/users/login`, values);
