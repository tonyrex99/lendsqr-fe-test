import { AdminLogin } from "@/constants/mock/types";
import { setAuthToken } from "./auth";
import { initializeData } from "./store";
import { faker } from "@faker-js/faker";
import { generateNumbersFromString } from "./misc";
import { removeAuthToken } from "./auth";

export async function adminLogin(props: AdminLogin) {
  const stringifiedData = JSON.stringify(props);
  await setAuthToken(stringifiedData);
  if (stringifiedData) {
    faker.seed(generateNumbersFromString(stringifiedData!));
  }
  initializeData();
}

export async function adminLogout() {
  await removeAuthToken();
}
