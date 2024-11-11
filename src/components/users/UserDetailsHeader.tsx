"ese client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserDetails } from "@/constants/mock/types";

const userNavItems: string[] = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

interface Props {
  user: UserDetails;
}

const maxStars = 3;

const UserDetailsHeader: FC<Props> = ({ user }) => {
  // State to track the active item
  const [activeNavItem, setActiveNavItem] = useState<string | null>(
    "General Details"
  );

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <div className="user-header">
      <div className="user-header-info">
        <div>
          <div className="user-avatar">
            <Image
              layout="responsive"
              width={800}
              height={800}
              src={user?.personal?.photo_url || "/images/user-avatar.svg"}
              alt="avatar"
            />
          </div>
          <div>
            <p>{`${user?.personal?.firstName} ${user?.personal?.lastName}`}</p>
            <p>{user?.personal?.bvn}</p>
          </div>
        </div>

        <div className="user-tier">
          <p>User’s Tier</p>
          <div className="star-rating">
            {Array.from({ length: maxStars }, (_, index) => (
              <Image
                key={index}
                layout="responsive"
                width={800}
                height={800}
                src={
                  index < user?.personal?.tier
                    ? "/images/icons/star-filled.svg"
                    : "/images/icons/star-outline.svg"
                }
                alt={
                  index < user?.personal?.tier ? "filled star" : "outlined star"
                }
              />
            ))}
          </div>
        </div>

        <div>
          <p>₦ {user?.personal?.monthly_net_income}</p>
          <p>
            {user?.personal?.virtual_bank?.acct_no}/
            {user?.personal?.virtual_bank?.name}
          </p>
        </div>
      </div>

      <div className="user-header-nav">
        {userNavItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className={activeNavItem === item ? "tab" : ""}
          >
            <div onClick={() => handleNavItemClick(item)}>{item}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsHeader;
