/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import mongoose from "mongoose";

import cors from "cors";

import AdminModel from "./models/admin.model.js";

import bcrypt from "bcryptjs";

import farmersRouter from "./routes/farmers.js";
import buyersRouter from "./routes/buyers.js";
import ordersRouter from "./routes/orders.js";
import productsRouter from "./routes/products.js";
import adminsRouter from "./routes/admins.js";
import activityLogRouter from "./routes/activitylog.js";



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

app.use("/api/farmers", farmersRouter)
app.use("/api/buyers", buyersRouter)
app.use("/api/orders", ordersRouter)
app.use("/api/products", productsRouter)
app.use('/api/activitylogs', activityLogRouter);
app.use('/api/admin', adminsRouter);

//Admin



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
