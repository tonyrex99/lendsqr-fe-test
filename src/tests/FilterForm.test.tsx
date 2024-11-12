import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterForm from "@/components/users/FilterForm";
import {
  filterUsers,
  getInitializedData,
  getAllUniqueOrganizations,
} from "@/lib/utils/store";
import { FilterType } from "@/constants/mock/types";

// Mock the filterUsers, getInitializedData, and getAllUniqueOrganizations functions
jest.mock("@/lib/utils/store", () => ({
  filterUsers: jest.fn(),
  getInitializedData: jest.fn(),
  getAllUniqueOrganizations: jest.fn(),
}));

describe("FilterForm component", () => {
  const mockSetUsers = jest.fn();
  const mockSetFormData = jest.fn();
  const mockFormData: FilterType = {};

  beforeEach(() => {
    jest.clearAllMocks();
    (getAllUniqueOrganizations as jest.Mock).mockReturnValue([
      "Lendsqr",
      "Lendstar",
    ]);
  });

  it("should render correctly", () => {
    render(
      <FilterForm
        setUsers={mockSetUsers}
        formData={mockFormData}
        setFormData={mockSetFormData}
      />
    );

    expect(screen.getByLabelText("Organization")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
  });

  it("should handle form submission", async () => {
    render(
      <FilterForm
        setUsers={mockSetUsers}
        formData={mockFormData}
        setFormData={mockSetFormData}
      />
    );

    const submitButton = screen.getByText("Filter");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(filterUsers).toHaveBeenCalled();
      expect(mockSetUsers).toHaveBeenCalled();
      expect(mockSetFormData).toHaveBeenCalled();
    });
  });

  it("should handle form reset", async () => {
    render(
      <FilterForm
        setUsers={mockSetUsers}
        formData={mockFormData}
        setFormData={mockSetFormData}
      />
    );

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(getInitializedData).toHaveBeenCalled();
      expect(mockSetUsers).toHaveBeenCalled();
      expect(mockSetFormData).toHaveBeenCalledWith({});
    });
  });
});
