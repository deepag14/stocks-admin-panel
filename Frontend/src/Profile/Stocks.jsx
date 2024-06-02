import axios from 'axios';
import { useParams } from 'react-router';

import { useEffect,useState } from 'react';

export const Stocks = () => {
  const { id } = useParams();

  const [getUsersData,setGetUsersData]=useState([]);
    
  const getUsers=async()=>{
    await axios.get(`http://localhost:3000/get/stocks`)
    .then((response)=>(setGetUsersData(response.data)))
    
    .catch((error)=>(console.log(error)))
    .finally();

  }
  useEffect(() => {
    getUsers();
   
  }, []);
  console.log(getUsersData);
  return(
    <div className='xl:w-[95%] xl:h-[90%] w-[95rem] h-[40rem] border border-white m-8'>
           
           <div className='relative flex flex-col   text-black-800  bg-clip-border rounded-xl  ' >
         
             <table >
             <thead className=' border  border-dotted' >
              <tr className=' border  border-dotted' >
              <th className=' border  border-line border-r-2  text-cyan-500 text-[15px]'>PRODUCT ID</th>
              <th className='border  border-line border-r-2  text-cyan-500 text-[15px]'>PRODUCT CATEGORY</th>
              <th className=' border  border-line border-r-2  text-cyan-500  text-[15px]'>PRODUCT NAME</th>
              <th className=' border  border-line border-r-2  text-cyan-500  text-[15px]'>QUANTITY</th>
              <th className=' border  border-line border-r-2  text-cyan-500 text-[15px]'>PRICE PER</th>
              <th className='border  border-line border-r-2  text-cyan-500  text-[15px]'>DATE AND TIME</th>
            
              </tr>
              </thead>
              <tbody className=' border  border-dotted' > 
              {getUsersData?.map((value) => (
              <tr key={value._id} >
                <td className=' border  border-line border-r-2 text-white text-[14px] font-semibold'>{value._id}</td>
                <td className=' border  border-line border-r-2 text-white  text-[14px] font-semibold'>{value.productcate}</td>
                <td className='  border  border-line border-r-2 text-white  text-[14px] font-semibold'>{value.productname}</td>
                <td className='  border  border-line border-r-2 text-white  text-[14px] font-semibold'>{value.quantity}</td>
                <td className='  border  border-line border-r-2 text-white  text-[14px] font-semibold'>{value.price}</td>
                <td className='  border  border-line border-r-2 text-white  text-[14px] font-semibold'>{value.createdAt}</td>
              
              </tr>
             
             ))} </tbody>
             </table>
             
           </div>
    

    </div>
  )
  
};
