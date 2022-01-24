import axios from "axios";

const api = axios.create({
  baseURL: "https://filesupx.herokuapp.com/"
});

export default api;
