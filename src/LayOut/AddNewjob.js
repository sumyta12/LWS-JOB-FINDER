import React from "react";
import Nav from "../Component/Nav/Nav";
import AddNewJob from "../Component/AddNewJob/AddNewJob";
import SideBar from "../Component/SideBar/SideBar";

export default function AddNewjob() {
  return (
    <>
      <Nav />
      <SideBar>
        <AddNewJob />
      </SideBar>
    </>
  );
}
