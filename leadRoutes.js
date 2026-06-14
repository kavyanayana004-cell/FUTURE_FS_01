const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");


// CREATE LEAD
router.post("/", async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET ALL + SEARCH
router.get("/", async (req, res) => {
  try {
    const { q } = req.query;

    let filter = {};

    if (q) {
      filter = {
        $or: [
          { name: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } },
          { source: { $regex: q, $options: "i" } },
        ],
      };
    }

    const leads = await Lead.find(filter).sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE LEAD
router.put("/:id", async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// DELETE LEAD
router.delete("/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// NOTIFICATIONS (recent leads)
router.get("/recent", async (req, res) => {
  try {
    const recent = await Lead.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(recent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;