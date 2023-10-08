import React from "react";
import Nav from "../Component/Nav/Nav";
import SideBar from "../Component/SideBar/SideBar";
import EditJobs from "../Component/EditJobs/EditJobs";

export default function EditNewjob() {
  return (
    <>
      <Nav />
      <SideBar>
        <EditJobs />
      </SideBar>
    </>
  );
}
