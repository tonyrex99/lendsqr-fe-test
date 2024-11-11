import { IncomingMessage } from "http";
import { getServerCookie, getCookie, setCookie, removeCookie } from "./cookies";

export const getAuthToken = async (
  req?: IncomingMessage
): Promise<string | undefined> => {
  // Use server-side cookies when req is provided (SSR)
  if (req) {
    return await getServerCookie(process.env.LOGIN_TOKEN || "authToken", req);
  }

  // Use client-side cookies otherwise
  return getCookie(process.env.LOGIN_TOKEN || "authToken");
};

export const setAuthToken = (token: string): void => {
  setCookie(process.env.LOGIN_TOKEN || "authToken", token, {}); // Set cookie  expires in 7 days
};

export const removeAuthToken = (): void => {
  removeCookie(process.env.LOGIN_TOKEN || "authToken"); // Set cookie  expires in 7 days
};
