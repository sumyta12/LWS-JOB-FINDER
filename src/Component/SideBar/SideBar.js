import React from "react";
import SideBarLeft from "./SideBarLeft";


export default function SideBar({children}) {
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <div className="sidebar">
        <nav>
          <SideBarLeft />
        </nav>
      </div>
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      {children}
      </div>
    </div>
  );
}
