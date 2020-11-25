import config from "../config/config.json";
import http from "./httpService";
// import logger from "./logService";
// import { toast } from "react-toastify";

export function getGenres() {
  return http.get(config.apiEndpoint + "/genres");
}
