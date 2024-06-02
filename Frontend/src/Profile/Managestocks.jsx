import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbDatabaseEdit } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export const Managestocks = () => {
  const { id } = useParams();
 
  const [getUsersData,setGetUsersData]=useState([]);
    
  const getUsers=async()=>{
    await axios.get(`http://localhost:3000/get/stocks`)
    .then((response)=>setGetUsersData(response.data))
    
    .catch((error)=>(console.log(error)))
    .finally();}

  const deleteUsers=async(id)=>{
    await axios
    .delete(`http://localhost:3000/delete/stocks/${id}`)
    .then((res)=>{
      if(res.data){
        toast.success("Delete Stocks Successfully")
      }
      
    })
    .catch((error)=>toast.error("Data Not Deleted"))
    .finally(()=>{
      getUsers()
    }
     
    );
  }
  useEffect(() => {
    getUsers();
   
  }, []);
  console.log(getUsersData);
  return (
    <div className="w-[90rem] h-[40rem] border border-white m-5">
      <div className="relative flex flex-col w-full h-full   text-black-800  bg-clip-border rounded-xl  ">
        <table>
          <thead className=" border  border-dotted">
            <tr className=" border  border-dotted">
              <th className=" border  border-line border-r-2  text-cyan-500 text-[15px]">
                PRODUCT ID
              </th>
              <th className="border  border-line border-r-2  text-cyan-500  text-[15px]">
                PRODUCT CATEGORY
              </th>
              <th className=" border  border-line border-r-2  text-cyan-500  text-[15px]">
                PRODUCT NAME
              </th>
              <th className=" border  border-line border-r-2  text-cyan-500 text-[15px]">
              QUANTITY
              </th>
              <th className=" border  border-line border-r-2  text-cyan-500 text-[15px]">
                PRICE PER
              </th>
              <th className="border  border-line border-r-2  text-cyan-500  text-[15px]">
                DATE AND TIME
              </th>
              <th className="border  border-line border-r-2  text-cyan-500  text-[15px]">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className=" border  border-dotted">
            {getUsersData?.map((value) => (
              <tr key={value._id}>
                <td className=" border  border-line border-r-2 text-white text-[14px] font-semibold">
                  {value._id}
                </td>
                <td className=" border  border-line border-r-2 text-white  text-[14px] font-semibold">
                  {value.productcate}
                </td>
                <td className="  border  border-line border-r-2 text-white  text-[14px] font-semibold">
                  {value.productname}
                </td>
                <td className="  border  border-line border-r-2 text-white  text-[14px] font-semibold">
                  {value.quantity}
                </td>
                <td className="  border  border-line border-r-2 text-white  text-[14px] font-semibold">
                  {value.price}
                </td>
                <td className="  border  border-line border-r-2 text-white  text-[14px] font-semibold">
                  {value.createdAt}
                </td>
                <td className="  border  border-line border-r-2 text-white  text-[14px] font-semibold">
                  <div className=" flex justify-center ">
                    {" "}
                    <Link to={`/Home/Editstocks/${value._id}`}>
                    <TbDatabaseEdit className="  w-6 h-6 text-green-400" /> </Link>
                    /
                    <MdOutlineDelete className=" text-red-500  w-8 h-7"  onClick={()=>deleteUsers(value._id)}/>
                  </div>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};
