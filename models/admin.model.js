import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const AdminSchema = mongoose.Schema(
  {

    Username: {
      type: String,
      required: [true, "Please enter  Username"],
    },
    Email: {
      type: String,
      required: false,
    },

    Password: {
      type: String,
      required: [true, "Please enter Cotanct"],
    },
  
    AccountType: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);


AdminSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  this.Password = await bcrypt.hash(this.Password, 10);
});




const Admin = mongoose.model("Admin_Account", AdminSchema);
export default Admin;
