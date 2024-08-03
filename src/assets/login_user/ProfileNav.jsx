import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import myImage from "../../assets/profile_image/m3.jpg";
import { RiMenuFold2Fill, RiNotification2Fill } from "react-icons/ri";
import SideBar from "../profile_image/SideBar";
import "./ProfileNav.css";
import { useSelector } from "react-redux";
import ProfileNavMenu from "./ProfileNavMenu";

function ProfileNav() {
  const userDetails = useSelector((state) => state.userDetails);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    if (isNotificationDropdownOpen) {
      setIsNotificationDropdownOpen(false);
    }
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen((prev) => !prev);
    if (isProfileDropdownOpen) {
      setIsProfileDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target) &&
      isProfileDropdownOpen
    ) {
      setIsProfileDropdownOpen(false);
    }
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target) &&
      isNotificationDropdownOpen
    ) {
      setIsNotificationDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdownOpen, isNotificationDropdownOpen]);

  const notifications = [
    { id: 1, text: "New comment on your post", read: false },
    { id: 2, text: "Your order has been shipped", read: true },
    { id: 3, text: "You have a new follower", read: false },
    { id: 4, text: "Update your profile information", read: true },
    { id: 5, text: "Reminder: Meeting at 3 PM", read: false },
  ];

  const handleNotificationClick = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    const unreadCount = updatedNotifications.filter(
      (notification) => !notification.read
    ).length;
    setNotificationCount(unreadCount);
  };

  return (
    <div>
      <div className="pt-[80px]"></div>
      <div className="fixed top-0 left-0 w-full z-50 h-[80px] bg-ishprimary shadow-lg flex justify-between items-center px-4 py-2 sm:px-6 md:px-8 lg:px-20">
        <div className="flex items-center">
          <RiMenuFold2Fill
            className="text-4xl text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex items-center gap-8 bg-white font-semibold p-2 rounded-full shadow-lg relative">
          <div
            className="relative flex items-center gap-2"
            ref={notificationRef}
            onClick={toggleNotificationDropdown}
          >
            <RiNotification2Fill className="text-2xl text-ishprimary cursor-pointer" />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
            <CSSTransition
              in={isNotificationDropdownOpen}
              timeout={300}
              classNames="dropdown"
              unmountOnExit
            >
              <div className="absolute right-0 top-[20px] mt-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="p-2">
                  <div className="text-gray-700 text-sm">
                    You have {notificationCount} notifications
                  </div>
                  <div className="border-t border-gray-200 mt-2">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-2 cursor-pointer hover:bg-gray-200 ${
                          notification.read ? "bg-gray-300" : "bg-white"
                        }`}
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        {notification.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
          <div
            className="w-10 h-10 sm:w-10 sm:h-10 bg-ishprimary rounded-full overflow-hidden outline-none cursor-pointer"
            onClick={toggleProfileDropdown}
            ref={profileRef}
          >
            <img
              src={myImage}
              className="w-full h-full object-cover border-white"
              alt="Profile"
            />
          </div>
          <CSSTransition
            in={isProfileDropdownOpen}
            timeout={300}
            classNames="dropdown"
            unmountOnExit
          >
            <div className="absolute right-0 top-[50px] mt-2 bg-ishprimary-100 outline-none rounded-3xl shadow-lg flex flex-col profile-dropdown">
              <div className="flex flex-col items-center justify-center border-b-2 border-black mt-2 text-ishprimary-500 font-bold py-2 gap-2 p-3">
                <div
                  className="w-20 h-20 bg-ishprimary rounded-full overflow-hidden outline cursor-pointer"
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                >
                  <img
                    src={myImage}
                    className="w-full h-full object-cover border-white"
                    alt="Profile"
                  />
                </div>
                <div className="text-center text-xl mt-1">
                  Hi, {userDetails.userDetails.name || "Rautish"}!
                </div>
                <div className="profile-email text-gray-600">
                  {userDetails.userDetails.email || ""}
                </div>
              </div>
              <ProfileNavMenu />
            </div>
          </CSSTransition>
        </div>
      </div>
      <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
}

export default ProfileNav;
