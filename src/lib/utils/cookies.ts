import Cookies from "js-cookie";
import { IncomingMessage } from "http";
import nextCookies from "next-cookies";

// Set a cookie
export const setCookie = (
  key: string,
  value: string,
  options?: Cookies.CookieAttributes
): void => {
  if (typeof window !== "undefined") {
    Cookies.set(key, value, { path: "/", ...options });
  }
};

// Get a cookie on the client side
export const getCookie = (key: string): string | undefined => {
  if (typeof window !== "undefined") {
    return Cookies.get(key);
  }
  return undefined;
};

// Get a cookie on the server side
export const getServerCookie = async (
  key: string,
  req: IncomingMessage
): Promise<string | undefined> => {
  const cookies = await nextCookies({ req });
  return cookies[key];
};

// Remove a cookie
export const removeCookie = (key: string): void => {
  if (typeof window !== "undefined") {
    Cookies.remove(key, { path: "/" });
  }
};
