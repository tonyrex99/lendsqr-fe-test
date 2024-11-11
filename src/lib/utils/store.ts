import { usersData } from "@/constants/mock/DummyUsersData";
import {
  AdminLogin,
  UserDetails,
  StatusType,
  FilterType,
} from "@/constants/mock/types";

export async function initializeData() {
  const existingData = localStorage.getItem(
    process.env.LOCAL_STORAGE_KEY || "myAppData"
  );
  if (!existingData) {
    await localStorage.setItem(
      process.env.LOCAL_STORAGE_KEY || "myAppData",
      JSON.stringify(usersData)
    );
  }
}

export function adminLogin(props: AdminLogin) {
  console.log(props);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalStorageItem = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }
  return null;
};

export function getInitializedData() {
  return getLocalStorageItem(process.env.LOCAL_STORAGE_KEY || "myAppData");
}

// Function to get a user by their userId
export function getUserById(userId: string): UserDetails | null {
  const users = getInitializedData() as UserDetails[] | null;
  if (!users) return null;
  return users.find((user) => user.id === userId) || null;
}

// Function to change a user's status
export function changeUserStatus(
  userId: string,
  newStatus: StatusType
): string | void {
  try {
    const users = getInitializedData() as UserDetails[] | null;
    if (!users) {
      alert("No users found.");
    }

    const userIndex = users?.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      alert("User not found.");
    }

    const updatedUsers = users?.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    );

    setLocalStorageItem(
      process.env.LOCAL_STORAGE_KEY || "myAppData",
      updatedUsers
    );

    // Find the user to get their full name
    const user = users![userIndex!];
    alert(
      `${user.personal.firstName} ${user.personal.lastName} (ID: ${user.id}) has been set to ${newStatus}.`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(
      err.message || "An error occurred while changing user status."
    );
    return `Error: ${err.message || "Failed to change user status."}`; // Return error message
  }
}

// Function to filter users by multiple parameters
export function filterUsers(filters: FilterType): UserDetails[] {
  const users = getInitializedData() as UserDetails[] | null;
  if (!users) return [];

  return users.filter((user) => {
    const { name, organization, dateJoined, phone, status, email, username } =
      filters;

    const userName = `${user.personal.firstName} ${user.personal.lastName}`;

    return (
      (!name || userName.toLowerCase().includes(name.toLowerCase())) &&
      (!organization ||
        user.personal.organization
          .toLowerCase()
          .includes(organization.toLowerCase())) &&
      (!dateJoined ||
        new Date(user.personal.date_joined)
          .toISOString()
          .startsWith(dateJoined)) &&
      (!phone || String(user.personal.phone).includes(phone)) &&
      (!status || user.status === status) &&
      (!email || user.personal.email.toLowerCase() === email.toLowerCase()) &&
      (!username || userName.toLowerCase() === username.toLowerCase())
    );
  });
}

// Function to get all unique organizations
export function getAllUniqueOrganizations(): string[] {
  const users = getInitializedData() as UserDetails[] | null;
  if (!users) return [];

  const organizations = users.map((user) => user.personal.organization);
  return Array.from(new Set(organizations));
}

// Function to get the total number of users
export function getTotalUsersCount(): number {
  const users = getInitializedData() as UserDetails[] | null;
  if (!users) return 0; // Return 0 if no users found
  return users.length; // Return the total number of users
}

// Function to get the number of active users
export function getActiveUsersCount(): number {
  const users = getInitializedData() as UserDetails[] | null;
  if (!users) return 0; // Return 0 if no users found
  const activeUsers = users.filter((user) => user.status === "Active"); // Filter active users
  return activeUsers.length; // Return the number of active users
}
