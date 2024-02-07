import axios from "axios";

const apiUser = axios.create({
  baseURL:
    "https://e293-2804-1530-105-ad77-59c1-e76b-c9e5-fb79.ngrok-free.app/",
  headers: {
    "Acess-Control-Allow-Origin": "*",
  },
});

axios.defaults.withCredentials = true;

export default apiUser;
