import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navber.css";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="sticky top-0 z-20">
      <div className="navbar w-11/12 mx-auto border-b border-gray-200 text-black bg-white/20 backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/my-profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn-ghost text-2xl font-extrabold text-black">
            Cratezy
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="text-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-profile" className="text-black">
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {loading ? (
            <div className="flex items-center justify-center w-12 h-12">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          ) : user ? (
            <>
              <div className="mr-6 flex items-center gap-3">
                <h1 className="font-medium hidden md:flex">
                  {user.displayName}
                </h1>
                <img
                  src={user?.photoURL}
                  alt={user.displayName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                  title={user.displayName}
                />
              </div>
              <button
                onClick={handleLogOut}
                className="mt-2 px-6 py-3 text-white font-semibold border-none bg-indigo-600 hover:bg-indigo-700 rounded-3xl shadow-md transition duration-300"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="mt-2 px-6 py-3 btn text-white border-none font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-3xl shadow-md transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
