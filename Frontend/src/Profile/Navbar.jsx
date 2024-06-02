import React from "react";
import { Link } from "react-router-dom";
import image from "../images/bgimage.jpg";

export const Navbar = () => {
  return (
    <div>
      <div className="sm: flex items-center justify-center">
        <div className="w-full h-[5rem] border border-white flex items-center justify-end  rounded-lg shadow-xl shadow-cyan-500 ">
          <ul className="flex gap-8 item-center  text-white  mr-14 font-semibold text-l cursor-pointer  ">
            <Link to={`/Home/Navigation`}>
              <li className="hover:text-cyan-500">HOME</li>
            </Link>
            <Link to={`/Home/Stocks`}>
              <li className="hover:text-cyan-500">STOCKS</li>
            </Link>
            <Link to={`/Home/AddStocks`}>
              <li className="hover:text-cyan-500">ADD STOCKS</li>
            </Link>
            <Link to={`/Home/ManageStocks`}>
              <li className="hover:text-cyan-500">MANAGE STOCKS</li>
            </Link>
            <Link to={`/`}>
              <li className="hover:text-cyan-500">LOGOUT</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" absolute top-0 w-full h-screen  bg-black -z-20 opacity-60">
        {/* <div className="flex items-center justify-center h-screen my-10 ">
          
        </div> */}
      </div>
    </div>
  );
};
