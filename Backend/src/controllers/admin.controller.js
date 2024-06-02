const AdminService=require('../services/admin.service');

const admindetails=async(req,res)=>{
    let data=await AdminService.admindetails(req);
    console.log(data)
    res.send(data)
}
const LoginByEmailAndPassword=async(req,res)=>{
    let data=await AdminService.LoginByEmailAndPassword(req);
   console.log(data)
    res.send(data)
}
module.exports={
   admindetails,LoginByEmailAndPassword
}