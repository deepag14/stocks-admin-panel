import React from "react";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
export default function Navigation() {
  return (
    <div>
      <div className="flex items-center justify-center my-10 ">
        <div className="p-8 flex flex-col items-center text-white  bg-transparent border boder-white  rounded-lg  shadow-lg  ">
          <MdOutlineAdminPanelSettings className=" text-zinc-50  w-80 h-40 items-center" />
          <h1 className=" font-semibold text-center my-8 lg:text-5xl xl:text-5xl text-2xl md:text-2xl sm:text-2xl text-cyan-500">
            WELCOME ADMIN
          </h1>
        </div>
      </div>
    </div>
  );
}
