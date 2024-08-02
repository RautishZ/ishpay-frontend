import React from "react";

function ProfileNavMenu() {
  return (
    <div className="bg-white p-3 rounded-b-3xl w-full sm:w-[300px]">
      <div className="hover:bg-gray-400 rounded-md cursor-pointer">
        <div className="p-2 text-lg">Profile</div>
      </div>
      <div className="hover:bg-gray-400 rounded-md cursor-pointer">
        <div className="p-2 text-lg">Setting</div>
      </div>
      <div className="hover:bg-gray-400 rounded-md cursor-pointer">
        <div
          className="p-2 text-lg"
          onClick={() => {
            localStorage.removeItem("jwtToken");
            window.location.reload();
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default ProfileNavMenu;
