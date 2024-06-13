import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const FarmerSchema = mongoose.Schema(
  {
    DateRegistered: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      required: [true, "Please enter Farmer Username"],
    },
    FullName: {
      type: String,
      required: [true, "Please enter Fullrname"],
    },
    Address: {
      type: String,
      required: [true, "Please enter  Address"],
    },
    Contact: {
      type: String,
      required: [true, "Please enter Cotanct"],
    },
    Organization: {
      type: String,
      required: false,
    },
    Password: {
      type: String,
      required: [true, "Please enter a valid password"],
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

FarmerSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  this.Password = await bcrypt.hash(this.Password, 10);
});

const Farmers = mongoose.model("Farmer_Profile", FarmerSchema);
export default Farmers;
