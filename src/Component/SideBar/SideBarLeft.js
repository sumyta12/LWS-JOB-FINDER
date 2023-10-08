import React from "react";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import { filteraction } from "../../features/FilterJob/FilterSlice";

export default function SideBarLeft() {
  const dispatch = useDispatch();
  const currentActive = ({ isActive }) =>
    isActive ? "main-menu menu-active" : "main-menu";

  const handlerClick = (params) => {
    dispatch(filteraction(params));
  };

  return (
    <ul className="space-y-4">
      <li>
        <NavLink to="/" className={currentActive} id="lws-alljobs-menu">
          <i className="fa-solid fa-briefcase"></i>
          <span
            onClick={() => {
              handlerClick("");
            }}>
            {" "}
            All Available Jobs
          </span>
        </NavLink>
        <ul className="space-y-6 lg:space-y-2 ">
          <li>
            <div
              className="sub-menu"
              id="lws-internship-menu"
              onClick={() => {
                handlerClick("internship");
              }}>
              <i className="fa-solid fa-stop !text-[#FF5757]"></i>
              Internship
            </div>
          </li>
          <li>
            <div
              className="sub-menu"
              id="lws-fulltime-menu"
              onClick={() => {
                handlerClick("fulltime");
              }}>
              <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
              Full Time
            </div>
          </li>
          <li>
            <div
              className="sub-menu"
              href="/jobs/remote"
              onClick={() => {
                handlerClick("remote");
              }}
              id="lws-remote-menu">
              <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
              Remote
            </div>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/jobs" className={currentActive} id="lws-addJob-menu">
          <i className="fa-solid fa-file-circle-plus"></i>
          <span>Add NewJob</span>
        </NavLink>
      </li>
    </ul>
  );
}
