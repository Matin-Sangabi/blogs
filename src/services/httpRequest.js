import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : "";

const app = axios.create({
  baseURL,
});

const http = {
  get: app.get,
  put: app.put,
  post: app.post,
  delete: app.delete,
};

export default http;
