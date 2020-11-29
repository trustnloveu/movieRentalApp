import http from "./httpService";
// import { apiUrl } from "../config/config.json";
// import logger from "./logService";
// import toast from "react-toastify";

// End-Point > apiURrl has deleted
const apiEndpoint = "/movies";

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
