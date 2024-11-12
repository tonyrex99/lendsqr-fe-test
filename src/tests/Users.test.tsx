import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "@/app/dashboard/users/page";
import { getInitializedData } from "@/lib/utils/store";
import { usersData } from "@/constants/mock/DummyUsersData";

// Mock the getInitializedData function
jest.mock("@/lib/utils/store", () => ({
  getInitializedData: jest.fn(),
}));

describe("Users page", () => {
  const mockUsers = usersData;

  beforeEach(() => {
    (getInitializedData as jest.Mock).mockReturnValue(mockUsers);
  });

  it("should render correctly", async () => {
    render(<Users />);

    await waitFor(() => {
      const usersElements = screen.getAllByText("Users");
      usersElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
      
    });
  });

  it("should display the users stats and table", async () => {
    render(<Users />);

    await waitFor(() => {
      expect(screen.getByTestId("users-stats")).toBeInTheDocument();
      expect(screen.getByTestId("user-table")).toBeInTheDocument();
    });
  });

  it("should handle pagination correctly", async () => {
    render(<Users />);

    await waitFor(() => {
      expect(screen.getByTestId("user-table")).toBeInTheDocument();
    });

    const nextButton = screen.getByAltText("next image");
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByTestId("user-table")).toBeInTheDocument();
    });
  });

  it("should handle items per page change", async () => {
    render(<Users />);

    await waitFor(() => {
      expect(screen.getByTestId("user-table")).toBeInTheDocument();
    });

    const itemsPerPageDropdown = screen.getByRole("combobox");
    fireEvent.change(itemsPerPageDropdown, { target: { value: "20" } });

    await waitFor(() => {
      expect(
        screen.getByText((content) =>
          content.includes("items per page out of ")
        )
      ).toBeInTheDocument();
    });
  });
  //pagination

 

  it("should display error message if users data is not fetched", async () => {
    (getInitializedData as jest.Mock).mockReturnValue([]);

    render(<Users />);
    await waitFor(() => {
      expect(screen.getByTestId("no-customers")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("No Customers to Show")).toBeInTheDocument();
    });
    
  });
});
//no-customers
