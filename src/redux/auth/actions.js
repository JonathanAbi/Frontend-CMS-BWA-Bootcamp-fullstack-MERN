import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, role, refreshToken, email) {
  return {
    type: USER_LOGIN,
    token,
    role,
    refreshToken,
    email
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}
