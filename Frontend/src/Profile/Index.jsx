import React, { useState } from "react";
import image from "../images/bgimage.jpg";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const initialstate = {
    email: "",
    pass: "",
  };

  const [loginData, setLoginData] = useState(initialstate);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]:value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/admin/login`, loginData)
      .then((res) => {
        console.log("result", res);
        const { message } = res.data;
        console.log(message);
        if (message) {
          alert(message);
        } else {
          alert("Login Successfully");
          navigate("/Home/Navigation");
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(loginData);
  return (
    <div
      className="bg-cover  bg-no-repeat relative bg-center z-0 h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" flex items-center justify-center  ">
        <h1 className=" font-extrabold  text-center text-cyan-500 text-3xl my-11">
          LAKSHMI DEPARTMENT STORE
        </h1>
      </div>
      <div className=" absolute top-0 w-full h-screen  bg-black -z-20 opacity-60">
        <div className="flex items-center justify-center h-screen">
          <div className="p-8 text-white  bg-transparent border boder-white  rounded-lg  shadow-lg">
            <h1 className=" font-semibold text-center">Admin Login</h1>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col mt-2">
                <label className="mb-1 text-l  font-semibold text-left">
                  Email
                </label>
                <input
                  className=" px-2 py-1 text-white bg-transparent border border-white
             "
                  type="email"
                  name="email"
                  placeholder="Enter User Email"
                  onChange={handleChange}
                  value={loginData.name}
                  required
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="mb-1 text-l  font-semibold text-left">
                  Password
                </label>
                <input
                  className=" px-2 py-1 text-white bg-transparent border border-white
             "
                  type="password"
                  name="pass"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  value={loginData.name}
                  required
                />
              </div>
              <div className="flex flex-col mt-2">
                <button type="submit" className=" w-full py-2 mt-6  bg-cyan-500 border-cyan-700 rounded-full hover:bg-transparent hover:text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=" lg:mt-[38rem] md:mt-[31rem] sm:mt-[32rem] mt-[32rem]">
        <div className="flex w-full h-14 bg-cyan-500  justify-center    items-center border border-white ">
          <ul className=" flex flex-row gap-5">
            <li>CopyRights © 2024 </li>|<li> Lakshmi Department Store</li>|
            <li> All Rights Reserved</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
