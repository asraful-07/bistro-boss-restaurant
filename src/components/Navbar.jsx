import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handelLogout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-bold"
      : "text-gray-600 hover:text-indigo-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-700 flex items-center">
            <span className="text-indigo-500 text-3xl mr-2">✿</span> Jobs
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/hot-jobs" className={getNavLinkClass}>
            HotJobs
          </NavLink>
          <NavLink to="/my-apply" className={getNavLinkClass}>
            MyApply
          </NavLink>
          <NavLink to="/add-job" className={getNavLinkClass}>
            AddJob
          </NavLink>
          <NavLink to="/myPostedJobs" className={getNavLinkClass}>
            MyPostedJobs
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Profile Photo */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-indigo-500"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-indigo-700">
                  U
                </div>
              )}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                onClick={handelLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-700">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo-600 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <NavLink to="/about" className={getNavLinkClass} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink
            to="/solutions"
            className={getNavLinkClass}
            onClick={toggleMenu}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/causes"
            className={getNavLinkClass}
            onClick={toggleMenu}
          >
            Causes
          </NavLink>
          <NavLink to="/faq" className={getNavLinkClass} onClick={toggleMenu}>
            FAQ
          </NavLink>
          <NavLink to="/news" className={getNavLinkClass} onClick={toggleMenu}>
            News
          </NavLink>
          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          {user ? (
            <div className="flex flex-col items-center space-y-4">
              {/* Profile Photo */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-2 border-indigo-500"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-indigo-700">
                  U
                </div>
              )}
              <button
                className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-400"
                onClick={() => {
                  handelLogout();
                  toggleMenu();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" onClick={toggleMenu}>
                <button className="bg-indigo-800 text-white w-full py-2 rounded hover:bg-indigo-700 mb-2">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register" onClick={toggleMenu}>
                <button className="bg-indigo-500 text-white w-full py-2 rounded hover:bg-indigo-400">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
