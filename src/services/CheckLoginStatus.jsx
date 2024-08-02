import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../features/userDetailsSlice";
import { useNavigate, Navigate } from "react-router-dom";
import API from "./API";

function CheckLoginStatus({ children }) {
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Redirect authenticated users from login or signup to dashboard
        if (userDetails.isAuthenticated) {
          if (
            window.location.pathname === "/login" ||
            window.location.pathname === "/signup"
          ) {
            navigate("/home");
            return;
          }
        } else {
          const token = localStorage.getItem("jwtToken");
          if (token) {
            const response = await API.post("/login", { token });
            if (response.data.token) {
              localStorage.setItem("jwtToken", response.data.token);
              dispatch(setUserDetails(response.data));
            } else {
              localStorage.removeItem("jwtToken");
              navigate("/login");
              return;
            }
          } else {
            localStorage.removeItem("jwtToken");
            if (
              window.location.pathname !== "/login" &&
              window.location.pathname !== "/signup"
            ) {
              navigate("/login");
              return;
            }
          }
        }
      } catch (error) {
        console.error("Authentication error:", error); // Log error for debugging
        localStorage.removeItem("jwtToken");
        navigate("/login");
        return;
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [userDetails.isAuthenticated, dispatch, navigate]);

  if (isLoading) {
    return null; // Render nothing while checking auth status
  }

  if (
    !userDetails.isAuthenticated &&
    window.location.pathname.startsWith("/home")
  ) {
    return <Navigate to="/login" />;
  }

  if (
    userDetails.isAuthenticated &&
    (window.location.pathname === "/login" ||
      window.location.pathname === "/signup")
  ) {
    return <Navigate to="/home" />;
  }

  return children;
}

export default CheckLoginStatus;
