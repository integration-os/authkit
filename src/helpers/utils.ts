import { OauthDestinations } from "../types";

export const getUrl = (type: OauthDestinations) => {
  switch (type) {
    case "xero":
      return "https://login.xero.com/identity/connect/authorize?response_type=code";
    default:
      return "";
  }
};
