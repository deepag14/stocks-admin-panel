const{ AdminDetail }=require("../models/admin.model");
const Bcrypt=require('bcryptjs')

const admindetails=async(req)=>{
    const {email,pass}=req.body;
    let salt= Bcrypt.genSaltSync(10);
    let hash= Bcrypt.hashSync(pass,salt);
    let create= await AdminDetail.create({...req.body, ...{pass:hash}});
    console.log(create);
    console.log(hash)
    return create;
    
 
    };

const LoginByEmailAndPassword=async(req)=>{
    const{email,pass}=req.body;
    const  findadmin=await AdminDetail.findOne({email:email});
    console.log(findadmin);
    if(!findadmin){
        return{ message: "invalid email"};
    }
    else{
    let compare= await Bcrypt.compare(pass,findadmin.pass);
    if(compare){
        const check=compare && findadmin != null ? findadmin:null;
        return check;
    }
    else{
        return{message:"invalid password"}
    }
}
}
module.exports={
admindetails,LoginByEmailAndPassword,admindetails
}