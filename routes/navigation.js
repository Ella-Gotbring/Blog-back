const express = require("express");
const router = express.Router();
const { auth } = require("./authUser");

router.get("/", (req,res) => res.render("page/home"));

router.get("/index", (req,res) => res.render("page/index"));

router.get("/reg", (req,res) => res.render("page/reg"));

router.get("/landing", (req,res) => res.render("page/landing"));

router.get("/addPost", (req,res) => res.render("page/addPost"));

// router.get("/landing", auth, (req, res) => 
// res.render("page/landing", {user:req.user}));

// router.get("/addPost", auth, (req, res) =>
// res.render("page/addPost", { user:req.user}));


module.exports = router;
