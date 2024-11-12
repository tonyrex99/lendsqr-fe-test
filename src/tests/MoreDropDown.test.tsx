import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoreDropDown from "@/components/users/MoreDropDown";
import { changeUserStatus } from "@/lib/utils/store";

// Mock the changeUserStatus and getInitializedData functions
jest.mock("@/lib/utils/store", () => ({
  changeUserStatus: jest.fn(),
  getInitializedData: jest.fn(),
}));

describe("MoreDropDown component", () => {
  const mockSetUsers = jest.fn();
  const mockPosition = { top: 100, left: 100 };
  const mockDropdownRef = React.createRef<HTMLDivElement>();
  const mockUserId = "1";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(
      <MoreDropDown
        position={mockPosition}
        dropdownRef={mockDropdownRef}
        userId={mockUserId}
        setUsers={mockSetUsers}
      />
    );

    expect(screen.getByText("View Details")).toBeInTheDocument();
    expect(screen.getByText("Blacklist User")).toBeInTheDocument();
    expect(screen.getByText("Activate User")).toBeInTheDocument();
  });

  it("should handle blacklisting a user", async () => {
    render(
      <MoreDropDown
        position={mockPosition}
        dropdownRef={mockDropdownRef}
        userId={mockUserId}
        setUsers={mockSetUsers}
      />
    );

    const blacklistButton = screen.getByText("Blacklist User");
    fireEvent.click(blacklistButton);

    await waitFor(() => {
      expect(changeUserStatus).toHaveBeenCalledWith(mockUserId, "Blacklisted");
      expect(mockSetUsers).toHaveBeenCalled();
    });
  });

  it("should handle activating a user", async () => {
    render(
      <MoreDropDown
        position={mockPosition}
        dropdownRef={mockDropdownRef}
        userId={mockUserId}
        setUsers={mockSetUsers}
      />
    );

    const activateButton = screen.getByText("Activate User");
    fireEvent.click(activateButton);

    await waitFor(() => {
      expect(changeUserStatus).toHaveBeenCalledWith(mockUserId, "Active");
      expect(mockSetUsers).toHaveBeenCalled();
    });
  });
});
