import React from "react";
import Nav from "../Component/Nav/Nav";
import SideBar from "../Component/SideBar/SideBar";
import JobMain from "../Component/JobMain/JobMain";

export default function Home() {
  return (
    <>
      <Nav />
      <SideBar>
        <JobMain />
      </SideBar>
    </>
  );
}
