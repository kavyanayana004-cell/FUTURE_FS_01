const express = require("express");
console.log("Dashboard route loaded");
const Lead = require("../models/Lead");
const Customer = require("../models/Customer");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalLeads =
      await Lead.countDocuments();

    const totalCustomers =
      await Customer.countDocuments();

    const totalTasks =
      await Task.countDocuments();

    res.json({
      leads: totalLeads,
      customers: totalCustomers,
      tasks: totalTasks,
      revenue: 25000
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;