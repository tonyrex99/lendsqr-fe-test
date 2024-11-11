export type StatusType = "Inactive" | "Pending" | "Active" | "Blacklisted";
export type MaritalStatusType =
  | "Single"
  | "Married"
  | "Divorced"
  | "Rather not say"
  | "Widowed"
  | "Seperated";
export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Temporary"
  | "Internship"
  | "Freelance"
  | "Seasonal"
  | "Self-employed"
  | "Apprenticeship"
  | "Volunteer";

export interface FilterType {
  name?: string;
  organization?: string;
  dateJoined?: string;
  phone?: string;
  status?: StatusType;
  email?: string;
  username?: string;
}

export interface UserDetails {
  id: string;
  personal: PersonalInfo;
  eduNdWork: EduNdWork;
  socials: Socials;
  guarantor: Guarantor[];
  status: StatusType;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface EduNdWork {
  level_of_education: string;
  employment_status: EmploymentType | string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string | number;
}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phone: string | number;
  email: string;
  relationship: string | null;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  phone: string | number;
  email: string;
  organization: "Lendsqr" | "Lendstar" | "Iroroun" | "Ikotun" | "ikoko";
  referral_code: string;
  tier: number;
  monthly_net_income: string;
  virtual_bank: VirtualBank;
  photo_url: string;
  children: number | null;
  type_of_residence: string;
  marital_status: MaritalStatusType;
  bvn: string | number;
  date_joined: string | Date;
  gender: string;
}

export interface VirtualBank {
  name: string;
  acct_no: string | number;
}

export interface AdminLogin {
  id: string;
  email: string;
  password: string;
}

export interface AdminDetails extends AdminLogin {
  first_name: string;
  last_name: string;
  photo_url: string | null | undefined;
}
