import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./assets/all_user/HomePage";
import NavBar from "./assets/all_user/NavBar";
import WelcomeMessage from "./assets/all_user/WelcomeMessage";
import FAQ from "./assets/all_user/FAQ";
import AboutUsPage from "./assets/all_user/AboutUsPage";
import TermsAndConditionPage from "./assets/all_user/TermsAndConditionPage";
import ContactUsPage from "./assets/all_user/ContactUsPage";
import PrivacyPolicyPage from "./assets/all_user/PrivacyPolicyPage";
import LoginPage from "./assets/all_user/LoginPage";
import SignUpPage from "./assets/all_user/SignUpPage";
import FeaturesCards from "./assets/all_user/FeaturesCards";

import BankTransfer from "./assets/login_user/bank_transfer/BankTransfer";
import TransactionsPage from "./assets/login_user/TransactionsPage";
import LoginHomePage from "./assets/login_user/home_page/LoginHomePage";
import ProfileNav from "./assets/login_user/ProfileNav";
import CheckLoginStatus from "./services/CheckLoginStatus";
import IdentityVerification from "./assets/login_user/IdentityVerification";

// Importing payment components
import MobileRecharge from "./assets/login_user/payments/MobileRecharge";
import SelectDetails from "./assets/login_user/train_services/SelectDetails";
import RefundPolicyPage from "./assets/all_user/RefundPolicyPage";

import EmailVerification from "./assets/login_user/EmailVerification";

// Layout for pages that include the NavBar and WelcomeMessage
const MainLayout = () => (
  <div>
    <NavBar />
    <WelcomeMessage />
    <HomePage />
  </div>
);

// Layout for authenticated pages that include the ProfileNav
const DashboardLayout = () => (
  <div>
    <ProfileNav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <FeaturesCards />
            <FAQ />
          </div>
        ),
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditionPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "Refund-Policy",
        element: <RefundPolicyPage />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <CheckLoginStatus>
        <LoginPage />
      </CheckLoginStatus>
    ),
  },
  {
    path: "signup",
    element: (
      <CheckLoginStatus>
        <SignUpPage />
      </CheckLoginStatus>
    ),
  },
  {
    path: "email-verification",
    element: (
      <CheckLoginStatus>
        <EmailVerification />
      </CheckLoginStatus>
    ),
  },

  {
    path: "home",
    element: (
      <CheckLoginStatus>
        <DashboardLayout />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "",
        element: <LoginHomePage />,
      },
    ],
  },
  {
    path: "payment",
    element: (
      <CheckLoginStatus>
        <DashboardLayout />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "bank-transfer",
        element: <BankTransfer />,
      },
    ],
  },
  {
    path: "bill-payments",
    element: (
      <CheckLoginStatus>
        <DashboardLayout />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "mobile-recharge",
        element: <MobileRecharge />,
      },
    ],
  },
  {
    path: "transactions",
    element: (
      <CheckLoginStatus>
        <DashboardLayout />
        <TransactionsPage />
      </CheckLoginStatus>
    ),
  },
  {
    path: "identity-verification",
    element: <IdentityVerification />,
  },

  {
    path: "train-booking",
    element: (
      <>
        <DashboardLayout />
        <SelectDetails></SelectDetails>,
      </>
    ),
  },

  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
