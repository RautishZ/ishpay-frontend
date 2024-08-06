import React from "react";
import ProfileNav from "../ProfileNav";
import { Outlet } from "react-router-dom";

function UserHomePage() {
  return (
    <div className="min-h-screen py-10">
      <div className="px-3 sm:max-w-5xl mx-auto">
        <ProfileNav></ProfileNav>
        <Outlet />
      </div>
    </div>
  );
}

export default UserHomePage;
