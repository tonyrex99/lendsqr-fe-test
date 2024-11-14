import { faker } from "@faker-js/faker";
import {
  Guarantor,
  EmploymentType,
  MaritalStatusType,
  StatusType,
  UserDetails,
} from "./types";
import { getActiveUsersCount } from "@/lib/utils/store";
const topBanksInNigeria = [
  "Access Bank",
  "Zenith Bank",
  "First Bank of Nigeria",
  "United Bank for Africa",
  "Guaranty Trust Bank",
  "Ecobank Nigeria",
  "Fidelity Bank",
  "Union Bank of Nigeria",
  "Sterling Bank",
  "Wema Bank",
  "Polaris Bank",
  "Keystone Bank",
  "Stanbic IBTC Bank",
  "Standard Chartered Bank",
  "Unity Bank",
  "Heritage Bank",
  "Providus Bank",
  "SunTrust Bank",
  "Taj Bank",
  "Titan Trust Bank",
  "Globus Bank",
  "Rand Merchant Bank",
  "Coronation Merchant Bank",
  "Nova Merchant Bank",
  "FBNQuest Merchant Bank",
  "FCMB",
  "Jaiz Bank",
  "Lotus Bank",
  "Greenwich Merchant Bank",
  "Parallex Bank",
  "PremiumTrust Bank",
  "Citibank Nigeria",
  "Covenant Microfinance Bank",
  "Baobab Microfinance Bank",
  "Lapo Microfinance Bank",
  "NIRSAL Microfinance Bank",
  "Mutual Trust Microfinance Bank",
  "Mainstreet Microfinance Bank",
  "AB Microfinance Bank",
  "Accion Microfinance Bank",
  "Addosser Microfinance Bank",
  "Fina Trust Microfinance Bank",
  "Imperial Homes Mortgage Bank",
  "Infinity Trust Mortgage Bank",
  "Gateway Mortgage Bank",
  "Safetrust Mortgage Bank",
  "Trustbond Mortgage Bank",
  "Resort Savings & Loans",
  "ASO Savings & Loans",
  "CityCode Mortgage Bank",
];

function generateGuarantor(): Guarantor {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: `234 - ${faker.phone.number()}`,
    email: faker.internet.email(),
    relationship: faker.helpers.arrayElement([
      "Friend",
      "Sister",
      "Brother",
      "Father",
      "Mother",
      "Colleague",
      null,
    ]),
  };
}

function generateUser(): UserDetails {
  return {
    id: faker.string.uuid(),
    personal: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: `234 - ${faker.phone.number()}`,
      email: faker.internet.email(),
      referral_code: faker.string.alphanumeric(6).toUpperCase(),
      tier: faker.number.int({ min: 1, max: 5 }),
      gender: faker.person.sex(),
      organization: faker.helpers.arrayElement([
        "Lendsqr",
        "Lendstar",
        "Iroroun",
        "Ikotun",
        "ikoko",
      ]),
      date_joined: faker.date.past(),
      monthly_net_income: faker.helpers.arrayElement([
        "100,000 - 199,999",
        "200,000 - 299,999",
        "50,000 - 99,999",
      ]),
      virtual_bank: {
        name: faker.helpers.arrayElement(topBanksInNigeria), // Randomly select from Nigerian banks
        acct_no: faker.finance.accountNumber(),
      },
      photo_url: faker.image.avatar(),
      children: faker.number.int({ min: 0, max: 5 }),
      type_of_residence: faker.helpers.arrayElement([
        "Rented Apartment",
        "Parents Apartment",
        "Owned Home",
      ]),
      marital_status: faker.helpers.arrayElement([
        "Single",
        "Married",
        "Divorced",
        "Widowed",
        "Separated",
        "Rather not say",
      ]) as MaritalStatusType,
      bvn: `22*******${faker.number.int({ min: 10, max: 99 })}`,
    },
    eduNdWork: {
      level_of_education: faker.helpers.arrayElement([
        "BSc, HND and Other Equivalent",
        "High School",
        "Diploma",
      ]),
      employment_status: faker.helpers.arrayElement([
        "Full-time",
        "Part-time",
        "Contract",
        "Temporary",
        "Internship",
        "Freelance",
        "Seasonal",
        "Self-employed",
        "Apprenticeship",
        "Volunteer",
      ]) as EmploymentType,
      sector_of_employment: faker.helpers.arrayElement([
        "Finance",
        "Tourism & Hospitality",
        "Technology",
      ]),
      duration_of_employment: `${faker.number.int({ min: 1, max: 15 })} years`,
      office_email: faker.internet.email(),
      monthly_income: faker.helpers.arrayElement([
        "100,000 - 199,999",
        "200,000 - 299,999",
        "50,000 - 99,999",
      ]),
      loan_repayment: faker.finance.amount({ min: 1000, max: 20000 }),
    },
    socials: {
      twitter: `https://twitter.com/${faker.internet.username()}`,
      facebook: `https://facebook.com/${faker.internet.username()}`,
      instagram: `https://instagram.com/${faker.internet.username()}`,
    },
    guarantor: Array.from(
      { length: faker.number.int({ min: 1, max: 4 }) },
      generateGuarantor
    ),
    status: faker.helpers.arrayElement([
      "Inactive",
      "Pending",
      "Active",
      "Blacklisted",
    ]) as StatusType,
  };
}

// Generate 500 users
export const usersData: UserDetails[] = Array.from(
  { length: 500 },
  generateUser
);

export const usersStats = [
  {
    title: "Users",
    icon: "/images/icons/user-stat-icon-1.svg",
    count: "500",
  },
  {
    title: "Active Users",
    icon: "/images/icons/user-stat-icon-2.svg",
    count: String(getActiveUsersCount()),
  },
  {
    title: "Users with loans",
    icon: "/images/icons/user-stat-icon-3.svg",
    count: "300",
  },
  {
    title: "Users with savings",
    icon: "/images/icons/user-stat-icon-4.svg",
    count: "200",
  },
];
