import config from "../config/config.json";
import http from "./httpService";
// import logger from "./logService";
// import toast from "react-toastify";

export function getMovies() {
  return http.get(config.apiEndpoint + "/movies");
}

export function getMovie(movieId) {
  return http.get(config.apiEndpoint + "/movies/" + movieId);
}

// function saveMovie(movie) {
//   let movieInDb = movies.find((m) => m._id === movie._id) || {};
//   movieInDb.title = movie.title;
//   movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now().toString();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

export function deleteMovie(movieId) {
  return http.delete(config.apiEndpoint + "/movies/" + movieId);
}
