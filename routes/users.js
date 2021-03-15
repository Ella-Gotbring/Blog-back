const express = require("express");
const router = express.Router();
const { auth, register } = require("../models/Users");

router.post("/api/register", async (req, res) => {
  const user = await register(req.body);
  if (user) {
    res.json(user);
    return;
  }
  res.status(500);
});

router.post("/api/auth", async (req, res) => {
  res.clearCookie("auth");
  const token = await auth(req.body);
  if (token) {
    res
      .cookie("auth", token, { maxAge: 900000, httpOnly: true })
      .redirect("/landing");
    return;
  }
  res.status(500).json({ error: "Something went wrong" });
});


module.exports = router;
