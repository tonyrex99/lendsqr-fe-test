"use client";
import React, { FC } from "react";
import Link from "next/link";
import FilterForm from "./FilterForm";
import MoreDropDown from "./MoreDropDown";
import Image from "next/image";
import { formatDateJoined } from "@/lib/utils/misc";
import { UserDetails, FilterType } from "@/constants/mock/types";
import { useDropdown } from "@/hooks/useDropdown";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  users: UserDetails[];
  setUsers: Dispatch<SetStateAction<UserDetails[]>>;
}

const tableHeaders = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
  "",
];

const UsersTable: FC<Props> = ({ users, setUsers }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<null | number>(null);
  const {
    isOpen,
    position,
    dropdownRef,

    toggleDropdown,
  } = useDropdown();
  const [formData, setFormData] = useState<FilterType>({} as FilterType); // Store filter form data

  return (
    <div data-testid="user-table" className="users-table">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>
                <div>
                  <span>{header}</span>
                  {header && (
                    <Image
                      width={16}
                      height={16}
                      src="/images/icons/filter-icon.svg"
                      alt="filter-icon"
                      className={isFilterOpen === index ? "active-filter" : ""}
                      onClick={() =>
                        setIsFilterOpen(isFilterOpen === index ? null : index)
                      }
                    />
                  )}
                </div>
                {isFilterOpen === index ? (
                  <FilterForm
                    setUsers={(data) => {
                      setUsers(data);
                    }}
                    formData={formData}
                    setFormData={setFormData}
                  />
                ) : (
                  ""
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users?.length < 1 && (
            <tr data-testid="no-customers">
              <td>No Customers to Show</td>
            </tr>
          )}
          {users?.map((user: UserDetails, index: number) => (
            <tr key={index}>
              <td>
                <Link href={`/dashboard/users/${user?.id}`}>
                  {user?.personal?.organization}
                </Link>
              </td>
              <td>{`${user?.personal?.firstName} ${user?.personal?.lastName}`}</td>
              <td>{user?.personal?.email}</td>
              <td>{user?.personal?.phone}</td>
              <td>{formatDateJoined(user?.personal?.date_joined)}</td>
              <td>
                <span className={`status ${user?.status?.toLowerCase()}`}>
                  {user?.status}
                </span>
              </td>
              <td>
                <Image
                  layout="responsive"
                  width={80}
                  height={80}
                  src="/images/icons/more-icon.svg"
                  alt="more"
                  onClick={(e) => toggleDropdown(e, index)}
                  className={isOpen === index ? "active-more" : "more"}
                  style={{
                    transform:
                      isOpen === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
                {isOpen === index && (
                  <MoreDropDown
                    position={position}
                    dropdownRef={dropdownRef}
                    userId={user.id}
                    setUsers={setUsers}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
