const express = require("express");
const router = express.Router();
const { auth, register } = require("../models/Users");

router.post("/api/auth", async (req,res) => {
    res.clearCookie("auth");
    const token = await auth(req.body);
    if (token){
        res .cookie("auth", token, {maxAge: 800000, httpOnly:true})
        return;
    }
    res.status(500).json({error: "Not working"});
})

module.exports = router;
