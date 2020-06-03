const express = require("express");

const db = require("./data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const frontPosts = await db.find();
    return res.status(200).json({ frontPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const frontPosts = await db.insert(req.body);
    post
      ? res.status(201).json(frontPosts)
      : res.status(400).json({ error: "All fields are required." });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
