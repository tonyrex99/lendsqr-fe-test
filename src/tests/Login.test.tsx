// render(<Login />);
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation"; // Adjusted import for Next.js 13
import Login from "@/app/login/page";
import { adminLogin } from "@/lib/utils/login";

// Mock the useRouter hook from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock the adminLogin function
jest.mock("@/lib/utils/login", () => ({
  adminLogin: jest.fn(),
}));

describe("Login component", () => {
  beforeEach(() => {
    // Mock implementation for the useRouter
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(), // Mock `push` method
    });
  });

  it("should have an email and password field, and a submit button", () => {
    render(<Login />);

    const emailField = screen.getByPlaceholderText(/email/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button");

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should show error messages when required fields are empty", async () => {
    render(<Login />);

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    await waitFor(() => {
      const emailError = screen.getByText(/please enter your email/i);
      expect(emailError).toBeInTheDocument();
    });
  });

  it("should allow a user to submit their email and password", async () => {
    render(<Login />);

    const emailField = screen.getByPlaceholderText(/email/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button");

    await userEvent.type(emailField, "test@gmail.com");
    await userEvent.type(passwordField, "password");
    await userEvent.click(submitButton);

    // Check if adminLogin was called
    expect(adminLogin).toHaveBeenCalledWith({
      email: "test@gmail.com",
      password: "password",
    });
  });

  it("should toggle password visibility", async () => {
    render(<Login />);

    const passwordField = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByText(/show/i);

    // Initially, the password should be hidden
    expect(passwordField).toHaveAttribute("type", "password");

    // Click the toggle button to show the password
    await userEvent.click(toggleButton);
    expect(passwordField).toHaveAttribute("type", "text");

    // Click the toggle button again to hide the password
    await userEvent.click(toggleButton);
    expect(passwordField).toHaveAttribute("type", "password");
  });

  it("should display loading state when submitting", async () => {
    render(<Login />);

    const emailField = screen.getByPlaceholderText(/email/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button");

    await userEvent.type(emailField, "test@gmail.com");
    await userEvent.type(passwordField, "password");
    await userEvent.click(submitButton);

    // Check if the button shows loading state
    expect(submitButton).toHaveTextContent("Loading...");
  });
});
