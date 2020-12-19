import { HOST } from "../../config/server";

export const getFacebookLogin = () => {
  return `${HOST}/auth/login/facebook`;
};

export const login = (username: string, password: string) => {
  return {};
};
