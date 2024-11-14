# LendSqr Frontend Test Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/tonyrex99/lendsqr-fe-test.git
cd lendsqr-fe-test
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [`src/app/dashboard/users/page.tsx`](src/app/dashboard/users/page.tsx). The page auto-updates as you edit the file.

## Project Structure

```plaintext
.env
.eslintrc.json
.gitignore
.next/
public/
src/
  ├── app/
  │   ├── dashboard/
  │   │   ├── users/
  │   │   │   ├── [userId]/
  │   │   │   │   └── page.tsx
  │   │   │   └── page.tsx
  │   │   └── layout.tsx
  │   │   └── error.tsx
  │   │   └── not-found.tsx
  ├── components/
  │   ├── dashboard/
  │   │   ├── SideBar.tsx
  │   │   └── TopNav.tsx
  │   ├── general/
  │   │   └── Loader.tsx
  │   ├── users/
  │   │   ├── FilterForm.tsx
  │   │   ├── MoreDropDown.tsx
  │   │   ├── UserDetailsHeader.tsx
  │   │   ├── UserDetailsMain.tsx
  │   │   ├── UsersStats.tsx
  │   │   ├── UsersTable.tsx
  ├── constants/
  │   ├── mock/
  │   │   ├── DummyUsersData.ts
  │   │   └── types.ts
  │   └── navigation/
  │       └── sidebar.tsx
  ├── hooks/
  │   └── useDropdown.ts
  ├── lib/
  │   ├── utils/
  │   │   ├── store.ts
  │   │   ├── login.ts
  │   │   ├── auth.ts
  │   │   └── misc.ts
  ├── styles/
  │   ├── dashboard.scss
  │   ├── global.scss
  │   ├── login.scss
  │   ├── user-details.scss
  │   ├── users.scss
  │   └── variables.scss
  ├── tests/
  │   ├── FilterForm.test.tsx
  │   ├── Login.test.tsx
  │   ├── MoreDropDown.test.tsx
  │   ├── Users.test.tsx
  │   └── UsersDetail.test.tsx
  ├── app/
  │   ├── layout.tsx
  │   └── page.tsx
jest.config.ts
next-env.d.ts
next.config.ts
package.json
README.md
tsconfig.json
yarn-error.log
```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the [`.next`](.next) folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` or `yarn start`

Runs the built app in production mode.\
Make sure to run `npm run build` or `yarn build` first.

### `npm run lint` or `yarn lint`

Runs the linter to check for code quality issues.

### `npm run test` or `yarn test`

Launches the test runner in the interactive watch mode.

## Environment Variables

Create a [`.env`](.env) file in the root of your project to define environment variables. Example:

```env
LOCAL_STORAGE_KEY=myAppData
LOGIN_TOKEN = authToken
```

## Testing

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing.

To run tests, use:

```bash
npm run test
# or
yarn test
```

## Styling

This project uses SCSS for styling. The styles are organized in the [`src/styles`](src/styles) directory.

## API Integration

The project uses mock data defined in [`src/constants/mock/DummyUsersData.ts`](src/constants/mock/DummyUsersData.ts). You can replace this with actual API calls as needed.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
