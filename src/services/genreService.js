import { apiUrl } from "../config/config.json";
import http from "./httpService";
// import logger from "./logService";
// import { toast } from "react-toastify";

const apiEndpoint = apiUrl + "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
