import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { use } from "react";
import UserDetail from "@/app/dashboard/users/[userId]/page";
import { getUserById, changeUserStatus } from "@/lib/utils/store";
import { useRouter } from "next/navigation";

// Mock the use hook and other dependencies
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: jest.fn(),
}));

jest.mock("@/lib/utils/store", () => ({
  getUserById: jest.fn(),
  changeUserStatus: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("UserDetail component", () => {
  const mockUser = {
    id: "1",
    personal: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      organization: "Lendsqr",
      referral_code: "ABC123",
      tier: 1,
      gender: "Male",
      date_joined: "2021-01-01",
      monthly_net_income: "100,000 - 199,999",
      virtual_bank: {
        name: "Access Bank",
        acct_no: "1234567890",
      },
      photo_url: "https://example.com/photo.jpg",
    },
    eduNdWork: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Technology",
      duration_of_employment: "5 years",
      office_email: "john.doe@company.com",
      monthly_income: "100,000 - 199,999",
      loan_repayment: "5000",
    },
    socials: {
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
    guarantor: [
      {
        firstName: "Jane",
        lastName: "Doe",
        phone: "0987654321",
        email: "jane.doe@example.com",
        relationship: "Sister",
      },
    ],
    status: "Active",
  };

  beforeEach(() => {
    (use as jest.Mock).mockReturnValue({ userId: "1" });
    (getUserById as jest.Mock).mockReturnValue(mockUser);
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it("should render correctly", async () => {
    render(<UserDetail params={Promise.resolve({ userId: "1" })} />);

    await waitFor(() => {
      expect(screen.getByText("User Details")).toBeInTheDocument();
      expect(screen.getByText("Back to Users")).toBeInTheDocument();
    });
  });

  it("should display the 'BLACKLIST USER' and 'ACTIVATE USER' buttons", async () => {
    render(<UserDetail params={Promise.resolve({ userId: "1" })} />);

    await waitFor(() => {
      expect(screen.getByText("BLACKLIST USER")).toBeInTheDocument();
      expect(screen.getByText("ACTIVATE USER")).toBeInTheDocument();
    });
  });

  it("should handle blacklisting a user", async () => {
    render(<UserDetail params={Promise.resolve({ userId: "1" })} />);

    const blacklistButton = await screen.findByText("BLACKLIST USER");
    fireEvent.click(blacklistButton);

    await waitFor(() => {
      expect(changeUserStatus).toHaveBeenCalledWith("1", "Blacklisted");
    });
  });

  it("should handle activating a user", async () => {
    render(<UserDetail params={Promise.resolve({ userId: "1" })} />);

    const activateButton = await screen.findByText("ACTIVATE USER");
    fireEvent.click(activateButton);

    await waitFor(() => {
      expect(changeUserStatus).toHaveBeenCalledWith("1", "Active");
    });
  });

  it("should display loading state", async () => {
    render(<UserDetail params={Promise.resolve({ userId: "1" })} />);
  });

  it("should display error message", async () => {
    (getUserById as jest.Mock).mockReturnValue(null);

    render(<UserDetail params={Promise.resolve({ userId: "1" })} />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "User not found. Please check the user ID and try again."
        )
      ).toBeInTheDocument();
    });
  });
});
