const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Get all customers
router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Add customer
router.post("/", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
});

// Delete customer
router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);

  res.json({
    message: "Customer Deleted Successfully"
  });
});

module.exports = router;