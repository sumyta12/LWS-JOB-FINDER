import React from "react";
import Search from "../Search/Search";
import Job from "../Job/Job";
import { useSelector } from "react-redux";

export default function JobMain() {
  const { filterType } = useSelector((state) => state.filter);

  const filterChecker =
    filterType === ""
      ? "All"
      : filterType === "internship"
      ? "Internship"
      : filterType === "remote"
      ? "Remote"
      : filterType === "fulltime"
      ? "Full Time"
      : "";

  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">{filterChecker} Available Jobs</h1>
        <Search />
      </div>
      <Job />
    </main>
  );
}
