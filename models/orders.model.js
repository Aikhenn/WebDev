import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    DateOrdered: {
      type: String,
      required: true,
    },
    BuyerName: {
      type: String,
      required: [true, "Please enter Farmer Username"],
    },
    FarmerName: {
      type: String,
      required: [true, "Please enter Fullrname"],
    },
    ProductName: {
      type: String,
      required: [true, "Please enter  Address"],
    },
    Price: {
      type: Number,
      required: [true, "Please enter Cotanct"],
    },
    Quantity: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Order_Lists", OrderSchema);
export default Orders;
