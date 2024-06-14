/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import FarmerModel from "./models/farmer.model.js";
import BuyerModel from "./models/buyers.model.js";
import OrderModel from "./models/orders.model.js";
import ProductModel from "./models/products.model.js";
import AdminModel from "./models/admin.model.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

app.get("/api/farmers", async (req, res) => {
  try {
    const FarmerProfile = await FarmerModel.find({});
    res.status(200).json(FarmerProfile);
    console.log("created farm");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/farmers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedFarmer = await FarmerModel.findByIdAndUpdate(id, updatedData);
    if (!updatedFarmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json(updatedFarmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/farmers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedFarmer = await FarmerModel.findByIdAndUpdate(id, updatedData);
    if (!updatedFarmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    console.log("Updated Data:", updatedFarmer);

    const upFarmer = await FarmerModel.findById(id);
    res.status(200).json(upFarmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/farmers", async (req, res) => {
  try {
    const FarmerProfile = await FarmerModel.create(req.body);
    console.log("farmers created");
    res.status(200).json(FarmerProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/farmers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id requested", id);

    const FarmerProfile = await FarmerModel.findByIdAndDelete(id);

    if (!FarmerProfile) {
      return res.status(404).json({ message: "Farmer not Found" });
    }

    res.status(200).json({ message: "Farmer Succesfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Buyers
app.get("/api/buyers", async (req, res) => {
  try {
    const BuyerProfile = await BuyerModel.find({});
    res.status(200).json(BuyerProfile);
    console.log("created Buyers");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/buyers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedBuyers = await BuyerModel.findByIdAndUpdate(id, updatedData);
    if (!updatedBuyers) {
      return res.status(404).json({ message: "Buyer not found" });
    }
    res.status(200).json(updatedBuyers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/buyers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedBuyers = await BuyerModel.findByIdAndUpdate(id, updatedData);
    if (!updatedBuyers) {
      return res.status(404).json({ message: "Buyer not found" });
    }
    console.log("Updated Data:", updatedBuyers);

    const upBuyer = await BuyerModel.findById(id);
    res.status(200).json(upBuyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/buyers", async (req, res) => {
  try {
    const BuyerProfile = await BuyerModel.create(req.body);
    console.log("buyers created");
    res.status(200).json(BuyerProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/buyers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id requested", id);

    const BuyerProfile = await BuyerModel.findByIdAndDelete(id);

    if (!BuyerProfile) {
      return res.status(404).json({ message: "Buyer not Found" });
    }

    res.status(200).json({ message: "Buyer Succesfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Orders
app.get("/api/orders", async (req, res) => {
  try {
    const OrderList = await OrderModel.find({});
    res.status(200).json(OrderList);
    console.log("created ORders");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedOrders = await OrderModel.findByIdAndUpdate(id, updatedData);
    if (!updatedOrders) {
      return res.status(404).json({ message: "Order list not found" });
    }
    res.status(200).json(updatedOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedOrders = await OrderModel.findByIdAndUpdate(id, updatedData);
    if (!updatedOrders) {
      return res.status(404).json({ message: "Buyer not found" });
    }
    console.log("Updated Data:", updatedOrders);

    const upOrder = await OrderModel.findById(id);
    res.status(200).json(upOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const OrderList = await OrderModel.create(req.body);
    console.log("orders created");
    res.status(200).json(OrderList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id requested", id);

    const OrderList = await OrderModel.findByIdAndDelete(id);

    if (!OrderList) {
      return res.status(404).json({ message: "Order not Found" });
    }

    res.status(200).json({ message: "Order Succesfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Products
app.get("/api/products", async (req, res) => {
  try {
    const ProductList = await ProductModel.find({});
    res.status(200).json(ProductList);
    console.log("created Products");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product list not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Updated Data:", updatedProduct);

    const upProduct = await ProductModel.findById(id);
    res.status(200).json(upProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/product", async (req, res) => {
  try {
    const ProductList = await ProductModel.create(req.body);
    console.log("products created");
    res.status(200).json(ProductList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id requested", id);

    const ProductList = await ProductModel.findByIdAndDelete(id);

    if (!ProductList) {
      return res.status(404).json({ message: "Product not Found" });
    }

    res.status(200).json({ message: "Product Succesfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Admin
app.get("/api/admin", async (req, res) => {
  try {
    const AdminList = await AdminModel.find({});
    res.status(200).json(AdminList);
    console.log("created Admin");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/admin/:id", async (req, res) => {
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

app.put("/api/admin/:id", async (req, res) => {
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

app.post("/api/admin/create", async (req, res) => {
  try {
    const admin = await AdminModel.create(req.body);
    console.log("Admin created:", admin);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/admin/:id", async (req, res) => {
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
app.post("/api/admin/authenticate", async (req, res) => {
  const { Username, Password } = req.body;
  try {
    console.log("Username:", Username);
    console.log("Password:", Password);
    const admin = await AdminModel.findOne({ Username, Password });
    if (admin) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

mongoose
  .connect(
    "mongodb+srv://Aikhen:AO8SJwWSgChiifzx@farmers.rlmbihu.mongodb.net/Helen?retryWrites=true&w=majority&appName=Farmers"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`The server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
