const { StocksDetail } = require("../models/stocks.model");

const createstocks = async (req) => {
  let body = req.body;
  console.log(body, "body")
  let creates = await StocksDetail.create(body);
  return creates;
};

const getstocks = async (req) => {
  let body = req.body;
  let get = await StocksDetail.find();
  return get;
  console.log(get);
};
const getstocksbyid=async(req)=>{
  let _id=req.params.id;
  let getbyid=await StocksDetail.findById(_id);
 console.log(getbyid);
  return getbyid
  
}

const updatestocks=async(req)=>{
  let _id=req.params.id;
  let update=await StocksDetail.findById(_id);
  if(!update){
    console.log("Stock Details not found")
  }else{
    update=await StocksDetail.findByIdAndUpdate({_id:_id},req.body,{new:true})
  }
  return update
};

const deletestocks=async(req)=>{
  let _id=req.params.id;
  let deletedata =await StocksDetail.findById(_id);
  if(!deletedata){
    console.log("Data Not deleted")
  }else{
    deletedata=await StocksDetail.findByIdAndDelete({_id:_id},req.body,{new:true});
  }
return deletedata

};


module.exports={
    createstocks,getstocks,updatestocks,deletestocks,getstocksbyid
}