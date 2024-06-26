// routes/orders.js
import express from "express";
import OrderModel from "../models/orders.model.js";
import BuyerModel from "../models/buyers.model.js";

const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single order by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
router.post("/", async (req, res) => {
  try {
    const order = await OrderModel.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an order by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedOrder = await OrderModel.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an order by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get buyer names for order creation
router.get("/buyers/names", async (req, res) => {
  try {
    const buyers = await BuyerModel.find({}, "fullName");
    res.status(200).json(buyers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
