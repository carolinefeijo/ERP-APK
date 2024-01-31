import axios from "axios";

const apiUser = axios.create({
  baseURL: "localhost:4003",
  headers: {
    "Acess-Control-Allow-Origin": "*",
  },
});

axios.defaults.withCredentials = true;

export default apiUser;
