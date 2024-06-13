import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    DateAdded: {
      type: String,
      required: true,
    },

    ProductName: {
      type: String,
      required: [true, "Please enter  Address"],
    },
    FarmerName: {
      type: String,
      required: [true, "Please enter Fullrname"],
    },

    Price: {
      type: Number,
      required: [true, "Please enter Cotanct"],
    },
    Inventory: {
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

const Products = mongoose.model("Product_List", ProductSchema);
export default Products;
