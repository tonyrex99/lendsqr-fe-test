"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { getUserById, changeUserStatus } from "@/lib/utils/store";
import UserDetailsHeader from "@/components/users/UserDetailsHeader";
import UserDetailsMain from "@/components/users/UserDetailsMain";
import "@/styles/user-details.scss";
import Loader from "@/components/general/Loader";
import Image from "next/image";
import { UserDetails } from "@/constants/mock/types";

const UserDetail = ({ params }: { params: Promise<{ userId: string }> }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [blacklistLoading, setBlacklistLoading] = useState<boolean>(false); // State for blacklist button loading
  const [error, setError] = useState<string | null>(null); // For handling any errors
  const { userId } = use(params);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const selectedUser = getUserById(userId);

      if (!selectedUser) {
        throw new Error(
          "User not found. Please check the user ID and try again."
        );
      }

      setUser(selectedUser);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(
        err.message || "An unexpected error occurred while fetching the user."
      );
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleBlacklistUser = async () => {
    if (!userId) return;

    setBlacklistLoading(true);
    setError(null); // Reset any previous errors

    changeUserStatus(userId, "Blacklisted");
    setBlacklistLoading(false);
  };

  const handleActivateUser = async () => {
    if (!userId) return;

    setBlacklistLoading(true);
    setError(null);

    changeUserStatus(userId, "Active");
    setBlacklistLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className="user-details">
      <Link href="/dashboard/users" className="back">
        <Image
          width={30}
          height={30}
          src="/images/icons/back-icon.svg"
          alt="back"
        />{" "}
        <span>Back to Users</span>
      </Link>

      <div className="header-btns">
        <h1>User Details</h1>
        <div className="">
          <button
            type="button"
            onClick={handleBlacklistUser}
            disabled={blacklistLoading}
          >
            {blacklistLoading ? "Blacklisting..." : "BLACKLIST USER"}
          </button>
          <button
            type="button"
            onClick={handleActivateUser}
            disabled={blacklistLoading}
          >
            {blacklistLoading ? "Activating..." : "ACTIVATE USER"}
          </button>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <Loader />
      ) : (
        <div>
          <UserDetailsHeader user={user!} />
          <UserDetailsMain user={user!} />
        </div>
      )}
    </section>
  );
};

export default UserDetail;
