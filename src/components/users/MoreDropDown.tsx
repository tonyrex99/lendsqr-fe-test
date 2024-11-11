"use client";
import React, { FC } from "react";
import { createPortal } from "react-dom";
import { changeUserStatus } from "@/lib/utils/store";
import { UserDetails } from "@/constants/mock/types";
import { Dispatch, SetStateAction } from "react";
import { getInitializedData } from "@/lib/utils/store";
interface Props {
  position: { top: number; left: number };
  dropdownRef: React.RefObject<HTMLDivElement>;
  userId: string;
  setUsers: Dispatch<SetStateAction<UserDetails[]>>;
}

const MoreDropDown: FC<Props> = ({
  position,
  dropdownRef,
  userId,
  setUsers,
}) => {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      ref={dropdownRef}
      className="options-dropdown "
      style={{
        top: position.top,
        left: position.left,
        transform: "translateX(-100%)",
        transition: "top 0.3s ease, left 0.3s ease",
      }}
    >
      <ul>
        <li>
          <a href={`/dashboard/users/${userId}`}>
            <img src="/images/icons/eye-icon.svg" alt="eye icon" />
            <span>View Details</span>
          </a>
        </li>
        <li
          onClick={async () => {
            await changeUserStatus(userId, "Blacklisted");
            setUsers(getInitializedData() as UserDetails[]);
          }}
        >
          <img src="/images/icons/user-x-icon.svg" alt="user x icon" />
          <span>Blacklist User</span>
        </li>
        <li
          onClick={async () => {
            await changeUserStatus(userId, "Active");
            setUsers(getInitializedData() as UserDetails[]);
          }}
        >
          <img src="/images/icons/user-check-icon.svg" alt="user check icon" />
          <span>Activate User</span>
        </li>
      </ul>
    </div>,
    document.body
  );
};

export default MoreDropDown;
