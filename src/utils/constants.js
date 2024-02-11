import path from "./path";

export const navigations = [
  {
    id: 1,
    path: "/",
    text: "home",
  },
  {
    id: 2,
    path: `/${path.ABOUT_US}`,
    text: "about us",
  },
  {
    id: 3,
    path: `/${path.OUR_AGENTS}`,
    text: "our agents",
  },
  {
    id: 4,
    path: `/${path.PROPERTIES}`,
    text: "properties",
  },
  {
    id: 5,
    path: `/${path.SEARCH}`,
    text: "search",
  },
];

export const TYPE_SIGN_LOGIN = {
  LOGIN: "Login",
  REGISTER: "register",
};
export const HEADER = {
  API_KEY: "x-api-key",
  CLIENT_ID: "x-client-id",
  AUTHORIZATION: "authorization",
  REFRESHTOKEN: "x-token-id",
};
