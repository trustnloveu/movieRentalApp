import http from "./httpService";
// import { apiUrl } from "../config/config.json";

// apiURrl has deleted
const apiEndPoint = "/users";

// function userUrl(id) {
//   return `${apiEndPoint}/${id}`;
// }

// export function getUser(userId) {
//   return http.get(userUrl(userId));
// }

export function register(user) {
  //   const user = await getUser(user._id);
  //   if (user) {
  //     console.log("already");
  //   }
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
