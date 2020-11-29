import http from "./httpService";
// import { apiUrl } from "../config/config.json";
import jwtDecode from "jwt-decode";

// apiURrl has deleted
const apiEndPoint = "/auth";
const tokenKey = "token";

// token > http's header
http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt); // devTool > Application > Local Storage
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt); // return object(user)
    // console.log(user);
  } catch (ex) {
    console.log("No token exist in Application Local Storage");
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
