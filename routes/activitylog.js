import express from 'express';
import ActivityLog from "../models/activitylogs.model.js";

const router = express.Router();

// Endpoint to log activities
router.post('/', async (req, res) => {
  const { Activity, timestamp, Username } = req.body;
  try {
    const newLog = new ActivityLog({
      Username,
      Activity,
      createdAt: timestamp || new Date(), // Use provided timestamp or current time if not provided
    });
    await newLog.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving activity log:', error);
    res.status(500).send('Error saving activity log');
  }
});

// GET Endpoint to fetch all activity logs  
router.get('/', async (req, res) => {
  try {
    const logs = await ActivityLog.find().sort({ createdAt: -1 }); // Sort by createdAt descending
    res.json(logs);
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    res.status(500).send('Error fetching activity logs');
  }
});

export default router;
