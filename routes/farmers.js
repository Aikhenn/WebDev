/* eslint-disable @typescript-eslint/no-unused-vars */
// routes/farmers.js
import express from "express";
import FarmerModel from "../models/farmer.model.js";


const router = express.Router();

// GET all farmers
router.get("/", async (req, res) => {
  try {
    const farmers = await FarmerModel.find({});
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single farmer by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const farmer = await FarmerModel.findById(id);
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE a new farmer
router.post("/", async (req, res) => {
  try {
    const newFarmer = await FarmerModel.create(req.body);
    
    res.status(201).json(newFarmer);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a farmer by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFarmer = await FarmerModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFarmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json(updatedFarmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a farmer by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFarmer = await FarmerModel.findByIdAndDelete(id);
    if (!deletedFarmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json({ message: "Farmer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
