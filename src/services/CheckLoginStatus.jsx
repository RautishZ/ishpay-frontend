import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../features/userDetailsSlice";
import { useNavigate, Navigate } from "react-router-dom";
import API from "./API";
import LoadingScreen from "./LoadingScreen";

const CheckLoginStatus = ({ children }) => {
  const { isAuthenticated, userDetails: user } = useSelector(
    (state) => state.userDetails
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (token && !isAuthenticated) {
          const response = await API.post("/login", {});
          if (response.data.token) {
            localStorage.setItem("jwtToken", response.data.token);
          }
          dispatch(setUserDetails(response.data));
        }

        if (isAuthenticated) {
          if (!user.emailVerified) {
            navigate("/email-verification");
          } else if (
            window.location.pathname === "/login" ||
            window.location.pathname === "/signup"
          ) {
            navigate("/home");
          }
        } else if (window.location.pathname !== "/signup") {
          navigate("/login");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        localStorage.removeItem("jwtToken");
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [isAuthenticated, user.emailVerified, dispatch, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (
    !isAuthenticated &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/signup"
  ) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default CheckLoginStatus;
