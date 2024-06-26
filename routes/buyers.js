// routes/buyers.js
import express from "express";
import BuyerModel from "../models/buyers.model.js";

const router = express.Router();

// GET all buyers
router.get("/", async (req, res) => {
  try {
    const buyers = await BuyerModel.find({});
    res.status(200).json(buyers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single buyer by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const buyer = await BuyerModel.findById(id);
    if (!buyer) {
      return res.status(404).json({ message: "Buyer not found" });
    }
    res.status(200).json(buyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE a new buyer
router.post("/", async (req, res) => {
  try {
    const newBuyer = await BuyerModel.create(req.body);
    res.status(201).json(newBuyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a buyer by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBuyer = await BuyerModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBuyer) {
      return res.status(404).json({ message: "Buyer not found" });
    }
    res.status(200).json(updatedBuyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a buyer by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBuyer = await BuyerModel.findByIdAndDelete(id);
    if (!deletedBuyer) {
      return res.status(404).json({ message: "Buyer not found" });
    }
    res.status(200).json({ message: "Buyer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
