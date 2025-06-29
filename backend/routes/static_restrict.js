const express = require("express");
const router = express.Router();

const {restrictToLoggedinUserOnly} = require("../middleware/auth"); // adjust path as needed
const {fetchAvailableJobs} = require("../middleware/findJobs");
const {fetchAvailableTools} = require("../middleware/findProducts")

// Routes

router.get("/rent-buy", restrictToLoggedinUserOnly,fetchAvailableTools, (req, res) => {
  res.json({ message: "Rent/Buy tools page access granted",tools: req.tools});
});

router.get("/sell", restrictToLoggedinUserOnly, (req, res) => {
  res.json({ message: "Sell tools page access granted", user: req.user });
});

router.get("/post", restrictToLoggedinUserOnly, (req, res) => {
  res.json({ message: "Post labour jobs page access granted", user: req.user });
});

router.get("/find", restrictToLoggedinUserOnly, fetchAvailableJobs, (req, res) => {
  res.json({ message: "Find work page access granted", jobs: req.jobs });
});

router.get("/dashboard", restrictToLoggedinUserOnly, (req, res) => {
  res.json({ message: "Dashboard access granted", user: req.user });
});

module.exports = router;
