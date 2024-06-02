const mongoose = require("mongoose");
const { v4 } = require("uuid");

const StocksSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },

    pid: {
      type: String,
      required:true,
      trim: true,
    },
    productcate: {
      type: String,
      required:true,
      trim: true,
    },
    productname: {
      type: String,
      required:true,
      trim: true,
    },
    quantity: {
      type: String,
      required:true,
      trim: true,
    },
    price: {
      type: String,
      required:true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const StocksDetail = mongoose.model("Stockdetail", StocksSchema);
module.exports = { StocksDetail };
