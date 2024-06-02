const StocksServices = require("../services/stocks.services");

const createstocks = async (req, res) => {
  let data = await StocksServices.createstocks(req);
  console.log(data);
  res.send(data);
};

const getstocks=async(req,res)=>{
  let data=await StocksServices.getstocks(req);
  console.log(data)
  res.send(data);
}

const getstocksbyid=async(req,res)=>{
  let data=await StocksServices.getstocksbyid(req);
  console.log(data)
  res.send(data);
}

const updatestocks=async(req,res)=>{
  let data=await StocksServices.updatestocks(req);
  res.send(data);
}

const deletestocks=async(req,res)=>{
  let data=await StocksServices.deletestocks(req);
  res.send(data);
}
module.exports = {
  createstocks,getstocks,updatestocks,deletestocks,getstocksbyid
};
