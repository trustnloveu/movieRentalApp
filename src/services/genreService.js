import http from "./httpService";
// import { apiUrl } from "../config/config.json";
// import logger from "./logService";
// import { toast } from "react-toastify";

// apiURrl has deleted
const apiEndpoint = "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
