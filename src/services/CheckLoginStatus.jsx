import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../features/userDetailsSlice";
import { useNavigate, Navigate } from "react-router-dom";
import API from "./API";
import LoadingScreen from "./LoadingScreen";

const CheckLoginStatus = ({ children }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (token && !userDetails.isAuthenticated) {
          const response = await API.post("/login", {});
          console.log(response.data);
          if (response.data.token) {
            localStorage.setItem("jwtToken", response.data.token);
          }
          dispatch(setUserDetails(response.data));
        }

        if (userDetails.isAuthenticated) {
          if (!userDetails.userDetails.emailVerified) {
            navigate("/email-verification");
          } else if (
            !["/email-verification"].includes(window.location.pathname)
          ) {
            return children;
          } else {
            navigate("/home");
          }
        } else {
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
  }, [userDetails, dispatch, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (
    !userDetails.isAuthenticated &&
    window.location.pathname.startsWith("/home")
  ) {
    return <Navigate to="/login" />;
  }

  if (
    userDetails.isAuthenticated &&
    ["/login", "/signup"].includes(window.location.pathname)
  ) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default CheckLoginStatus;
