// routes/admin.js

import express from "express";
import AdminModel from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import logActivity from "../src/api/api.js";
import  { useState } from "react";


const router = express.Router();



// GET all admins

router.get("/", async (req, res) => {
  try {
    const AdminList = await AdminModel.find({});
    res.status(200).json(AdminList);
    console.log("created Admin");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedAdmin = await AdminModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin list not found" });
    }
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedAdmin = await AdminModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!updatedAdmin) {
      return res.status(404).json({ message: "admin not found" });
    }
    console.log("Updated Data:", updatedAdmin);
    

    const upAdmin = await AdminModel.findById(id);
    res.status(200).json(upAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const admin = await AdminModel.create(req.body);
    const username = useState(localStorage.getItem("username") || "Guest");
    console.log("Admin created:", admin);
    await logActivity(`created new admin user`, username)
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id requested", id);

    const AdminList = await AdminModel.findByIdAndDelete(id);

    if (!AdminList) {
      return res.status(404).json({ message: "Admin not Found" });
    }

    res.status(200).json({ message: "Admin Succesfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint for validating admin
router.post("/authenticate", async (req, res) => {
  const { Username, Password } = req.body;
  
  try {

    // Find admin by Username
    const admin = await AdminModel.findOne({ Username });

  
    if (admin) {
      // Compare hashed password from database with plain-text Password input using bcrypt.
      
      const isPasswordValid = await bcrypt.compare(Password, admin.Password);

      if (isPasswordValid) {
        await logActivity('Login Successful', Username);
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'Invalid username or password' });
      }
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error("Error authenticating admin:", error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


export default router;
