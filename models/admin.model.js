import mongoose from "mongoose";


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



const Admin = mongoose.model("Admin_Account", AdminSchema);
export default Admin;
