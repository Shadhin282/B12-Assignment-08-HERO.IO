import React from "react";
import { Link, NavLink } from "react-router";
import { Github } from "lucide-react";
import logo from "../assets/logo.png";



const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                to="/home"
                className=" font-bold ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className=" font-bold " to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink className=" font-bold " to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/home"
          className="btn btn-ghost text-xl bg-linear-to-r text-transparent from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text">
         <img className="w-10 h-10" src={logo} alt="" /> HERO.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/home"
              className="font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className=" font-bold " to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink className=" font-bold " to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/Shadhin282"
          target="_blank"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <span className="">
            <Github className="text-[#632EE3] bg-white rounded-[50%] p-1" />
          </span>
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
