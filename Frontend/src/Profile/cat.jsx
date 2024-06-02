import React, { useState } from 'react'
import axios from 'axios';

export const  C =()=> {

    const initialstate={
        categoryName:""
    }
    const[formData,setFormData]=useState(initialstate);

    const handleChange=async(event)=>{
        const{name,value}=event.target;
        setFormData({...formData,[name]:value})
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios
    .post("http://localhost:8080/category",formData)
    .then((res)=>(console.log(res)))
    .catch((error)=>(console.log(error)))
    .finally(setFormData(initialstate));

}
    
return(
    <div>
        <form onSubmit={handleSubmit}>
                <input type="text" name='categoryName' value={formData.categoryName} onChange={handleChange} />
                <button type='submit'>Submit</button>
        </form>
    </div>
);
};

