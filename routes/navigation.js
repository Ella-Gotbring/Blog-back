const express = require("express");
const router = express.Router();

router.get("/", (req,res) => res.render("page/home"));

router.get("/index", (req,res) => res.render("page/index"));

router.get("/reg", (req,res) => res.render("page/reg"));

module.exports = router;
