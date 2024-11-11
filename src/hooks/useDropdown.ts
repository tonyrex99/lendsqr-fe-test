import { useState, useEffect, useRef, useCallback } from "react";

interface DropdownPosition {
  top: number;
  left: number;
}

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);
  const [position, setPosition] = useState<DropdownPosition>({
    top: 0,
    left: 0,
  });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null); // Ref for the action button
  const initialTopOffset = useRef(0); // Track initial top offset

  // Function to open the dropdown and set its position
  const openDropdown = useCallback(
    (e: React.MouseEvent<HTMLImageElement>, index: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      buttonRef.current = e.currentTarget; // Store the button ref for position calculation
      initialTopOffset.current = rect.top + window.scrollY; // Save the initial position on open
      setPosition({
        top: rect.bottom + 30, // Position below the button
        left: rect.left + window.scrollX + 25, // Align horizontally
      });
      setIsOpen(index); // Open the dropdown for the clicked item

      // Disable scrolling for elements with the 'dashboard-main' class and its children
      const dashboardMain = document.querySelector(
        ".dashboard-main"
      ) as HTMLElement;
      if (dashboardMain) {
        dashboardMain.style.overflow = "hidden";
      }

      const dashboardTop = document.querySelector(".dashboard") as HTMLElement;
      if (dashboardTop) {
        dashboardTop.style.overflow = "hidden";
      }
    },

    []
  );

  // Function to close the dropdown and restore scroll
  const closeDropdown = useCallback(() => {
    setIsOpen(null); // Close the dropdown
    buttonRef.current = null; // Clear button ref

    // Re-enable scrolling by resetting 'overflow' on the 'dashboard-main' container
    const dashboardMain = document.querySelector(
      ".dashboard-main"
    ) as HTMLElement;

    const dashboardTop = document.querySelector(".dashboard") as HTMLElement;
    if (dashboardTop) {
      dashboardTop.style.overflow = "auto";
    }

    if (dashboardMain) {
      dashboardMain.style.overflow = "auto";
    }
  }, []);

  // Function to handle click events outside the dropdown to close it
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    },
    [closeDropdown]
  );

  // Adding event listeners for mousedown when dropdown is open
  useEffect(() => {
    if (isOpen !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const toggleDropdown = (
    e: React.MouseEvent<HTMLImageElement>,
    index: number
  ) => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown(e, index);
    }
  };

  return {
    isOpen,
    position,
    openDropdown,
    closeDropdown,
    dropdownRef,
    toggleDropdown,
  };
};
