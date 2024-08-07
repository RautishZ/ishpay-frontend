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

import BankTransfer from "./assets/login_user/payments/bank_transfer/BankTransfer";
import TransactionsPage from "./assets/login_user/TransactionsPage";
import CheckLoginStatus from "./services/CheckLoginStatus";
import IdentityVerification from "./assets/login_user/IdentityVerification";

// Importing payment components
import MobileRecharge from "./assets/login_user/bill_payments/mobile_recharge/MobileRecharge";
import SelectDetails from "./assets/login_user/tickets/train_services/SelectDetails";
import RefundPolicyPage from "./assets/all_user/RefundPolicyPage";

import EmailVerification from "./assets/login_user/EmailVerification";
import VerifyAccountPage from "./assets/login_user/VerifyAccountPage";
import Home from "./assets/login_user/home_page/Home";
import UserHomePage from "./assets/login_user/home_page/UserHomePage";
import ElectricityBillPayment from "./assets/login_user/bill_payments/electricity_bill/ElectricityBillPayment";

// Layout for pages that include the NavBar and WelcomeMessage
const MainLayout = () => (
  <div>
    <NavBar />
    <WelcomeMessage />
    <HomePage />
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
        <UserHomePage />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "payment",
    element: (
      <CheckLoginStatus>
        <UserHomePage />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "bank-transfer",

        element: (
          <CheckLoginStatus>
            <BankTransfer />
          </CheckLoginStatus>
        ),
      },
    ],
  },
  {
    path: "bill-payments",
    element: (
      <CheckLoginStatus>
        <UserHomePage />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "mobile-recharge",
        element: <MobileRecharge />,
      },
      {
        path: "electricity-bill",
        element: <ElectricityBillPayment></ElectricityBillPayment>,
      },
    ],
  },
  {
    path: "tickets",
    element: (
      <CheckLoginStatus>
        <UserHomePage />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "trains",
        element: (
          <>
            <SelectDetails></SelectDetails>
          </>
        ),
      },
    ],
  },
  {
    path: "transactions",
    element: (
      <CheckLoginStatus>
        <UserHomePage />
      </CheckLoginStatus>
    ),
    children: [
      {
        path: "",
        element: (
          <>
            <TransactionsPage></TransactionsPage>
          </>
        ),
      },
    ],
  },

  {
    path: "identity-verification",
    element: <IdentityVerification />,
  },

  {
    path: "verify",
    element: <VerifyAccountPage></VerifyAccountPage>,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
