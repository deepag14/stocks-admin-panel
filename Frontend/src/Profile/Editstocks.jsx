import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
export const Editstocks = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const initialState = {
    pid: "",
    productcate: "",
    productname: "",
    quantity: "",
    price: "",
    dateandtime: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
 
    const { value, name } = event.target;
    console.log(name,value);
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    await axios
      .put(`http://localhost:3000/update/stocks/${id}`, formData)

      .then((res) => {
        if(res.data){
          toast.success("Update Stocks Successfully")
        }
        navigate("/Home/Managestocks")
      })

      .catch((error) => toast.error("Stocks doesn't Update"))
      .finally(() => {
        setFormData(initialState);
      });

  };
  console.log(handleUpdate);

  const getUsersDataByID = async () => {
    await axios
      .get(`http://localhost:3000/get/stocks/${id}`)
      .then((res) =>setFormData(res.data))
      .catch((error) => console.log(error))
      .finally();
  };
  console.log(formData);

  useEffect(()=>{
    getUsersDataByID();
},[])

  return (
    <div className="w-full  flex place-content-center  ">
      <div className="flex items-center justify-center  shadow-xl">
        <div className="p-8 w-[600px] text-white  bg-transparent border boder-white  rounded-lg  shadow-lg">
          <h1 className=" font-bold text-center text-cyan-500 ">EDIT STOCKS</h1>
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Product ID
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
                   "
                type="string"
                placeholder=" Product ID"
                name="id"
                value={formData._id}
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
                value={formData.productcate}
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
                value={formData.productname}
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
                value={formData.quantity}
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
                value={formData.price}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1 text-l  font-semibold text-left">
                Date and Time
              </label>
              <input
                className=" px-2 py-1 text-white bg-transparent border border-white
                   "
                type="text"
                placeholder="Date and Time"
                name="dateandtime"
                value={formData.createdAt}
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mt-2">
              <button className=" w-full py-2 mt-6  bg-cyan-500 border-cyan-700 rounded-full hover:bg-transparent hover:text-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
