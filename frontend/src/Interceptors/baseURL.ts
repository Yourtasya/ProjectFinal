import axios from "axios";
import GetCookie from "../cookies/getCookie";

export const API_URL = `http://localhost:3000`;

/// INTERCEPTOR

const $api = axios.create({
  //@ts-ignore
  credential: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${GetCookie("usrin")}`;
  return config;
});

export default $api;
