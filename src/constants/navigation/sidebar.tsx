interface NavItem {
  title: string;
  icon?: string;
  link: string;
  id: number;
  header?: boolean;
}
export const navItems: NavItem[] = [
  {
    title: "Switch Organization",
    icon: "/images/icons/nav-icon-13.svg",
    link: "#",
    id: 1,
  },
  {
    title: "Dashboard",
    icon: "/images/icons/home.svg",
    link: "/dashboard",
    id: 2,
  },
  {
    title: "Customers",
    header: true,
    link: "/dashboard/customers",
    id: 3,
  },
  {
    title: "Users",
    icon: "/images/icons/nav-icon-4.svg",
    link: "/dashboard/users",
    id: 4,
  },
  {
    title: "Guarantors",
    icon: "/images/icons/nav-icon-5.svg",
    link: "/dashboard/guarantors",
    id: 5,
  },
  {
    title: "Loan",
    icon: "/images/icons/nav-icon-6.svg",
    link: "/dashboard/loan",
    id: 6,
  },
  {
    title: "Decision Models",
    icon: "/images/icons/nav-icon-7.svg",
    link: "/dashboard/decision-models",
    id: 7,
  },
  {
    title: "Savings",
    icon: "/images/icons/nav-icon-8.svg",
    link: "/dashboard/savings",
    id: 8,
  },
  {
    title: "Loan Requests",
    icon: "/images/icons/nav-icon-9.svg",
    link: "/dashboard/loan-requests",
    id: 9,
  },
  {
    title: "Whitelist",
    icon: "/images/icons/nav-icon-10.svg",
    link: "/dashboard/whitelist",
    id: 10,
  },
  {
    title: "Karma",
    icon: "/images/icons/nav-icon-11.svg",
    link: "/dashboard/karma",
    id: 11,
  },
  {
    title: "Businesses",
    header: true,
    link: "/dashboard/businesses",
    id: 12,
  },
  {
    title: "Organization",
    icon: "/images/icons/nav-icon-13.svg",
    link: "/dashboard/organization",
    id: 13,
  },
  {
    title: "Loan Products",
    icon: "/images/icons/nav-icon-14.svg",
    link: "/dashboard/loan-products",
    id: 14,
  },
  {
    title: "Savings Products",
    icon: "/images/icons/nav-icon-15.svg",
    link: "/dashboard/savings-products",
    id: 15,
  },
  {
    title: "Fees and Charges",
    icon: "/images/icons/nav-icon-16.svg",
    link: "/dashboard/fees-charges",
    id: 16,
  },
  {
    title: "Transactions",
    icon: "/images/icons/nav-icon-17.svg",
    link: "/dashboard/transactions",
    id: 17,
  },
  {
    title: "Services",
    icon: "/images/icons/nav-icon-18.svg",
    link: "/dashboard/services",
    id: 18,
  },
  {
    title: "Service Account",
    icon: "/images/icons/nav-icon-19.svg",
    link: "/dashboard/service-account",
    id: 19,
  },
  {
    title: "Settlements",
    icon: "/images/icons/nav-icon-20.svg",
    link: "/dashboard/settlements",
    id: 20,
  },
  {
    title: "Reports",
    icon: "/images/icons/nav-icon-21.svg",
    link: "/dashboard/reports",
    id: 21,
  },
  {
    title: "Settings",
    header: true,
    link: "/dashboard/settings",
    id: 22,
  },
  {
    title: "Preferences",
    icon: "/images/icons/nav-icon-23.svg",
    link: "/dashboard/preferences",
    id: 23,
  },
  {
    title: "Fees and Pricing",
    icon: "/images/icons/nav-icon-24.svg",
    link: "/dashboard/fees-pricing",
    id: 24,
  },
  {
    title: "Audit Logs",
    icon: "/images/icons/nav-icon-25.svg",
    link: "/dashboard/audit-logs",
    id: 25,
  },
  {
    title: "Systems Messages",
    icon: "/images/icons/nav-icon-26.svg",
    link: "/dashboard/system-messages",
    id: 26,
  },
];

export default navItems;
