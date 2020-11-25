import { apiUrl } from "../config/config.json";
import http from "./httpService";
// import logger from "./logService";
// import toast from "react-toastify";

// End-Point
const apiEndpoint = apiUrl + "/movies";

// URL for getting Single Movie with ID
function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

// Get Movies
export function getMovies() {
  return http.get(apiEndpoint);
}

// Get Movie
export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

// Post or Put
export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

// Delete
export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
