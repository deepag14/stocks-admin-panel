import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Addstocks = () => {
  const initialState = {
    pid: "",
    productcate: "",
    productname: "",
    quantity: "",
    price: "",
 
  };

  const [formData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3000/create/stocks", formData)
      
      .then((res) => {
        if(res.data){
          toast.success("Stocks added Successfully");
        }
        else{
          
        }
      })
      .catch((error) => toast.error("Something Went wrong"))
      .finally(() => {
        setFormData(initialState);
      });
      console.log(formData);
  };
  // function Datefunction() {
  //   var myCurrentDate = new Date();
  //   var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();
  //   const newCurrentDate = "Current Date and Time: "+date;
  //   formData.dateandtime = newCurrentDate
  // }

  return (
    <div className="w-full h-screen flex place-content-center  ">
      <div className="flex items-center justify-center   shadow-xl">
        <div className="p-8 w-[600px] text-white  bg-transparent border boder-white  rounded-lg  shadow-lg">
          <h1 className=" font-bold text-center text-cyan-500 ">ADD STOCKS</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Product ID
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
               "
                type="text"
                placeholder=" Product ID"
                name="pid"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Product Category
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
               "
                type="text"
                placeholder="Product Category"
                name="productcate"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Product Name
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
               "
                type="text"
                placeholder="Product Name"
                name="productname"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Quantity
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
               "
                type="text"
                placeholder="Quantity"
                name="quantity"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Price
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
               "
                type="number"
                placeholder="Price"
                name="price"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
          

            <div className="flex flex-col mt-2">
              <button className=" w-full py-2 mt-6  bg-cyan-500 border-cyan-700 rounded-full hover:bg-transparent hover:text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
