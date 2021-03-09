const express = require("express");
const router = express.Router();
const {
    create, getAll, getOnePost, updatePost, deletePost
} = require("../models/Post");
const { auth } = require("./authUser");

router.get("/", auth, async (req, res) => {
    const posts = await getAll(req, user, req.user.userID);
    if(posts){
        res.render("pages/posts", { user: req.user, posts})
        return;
    };
    res.status(500);

});

router.post("/", auth, async (req, res) => {
    const post = await create(req.body, req.user.userID);
    if(post){
        res.json(blog);
        return;
    }
    res.status(500);
});

router.get("/:id", auth, async ( req, res) => {
    const posts = await getOnePost(req.params.id);
    if(posts) {
        res.render("pages/", { user: req.user, post} )
        return;
    }
    res.status(500);

});

router.post("/:id", auth, async (req, res) => {
    const posts = await updatePost(req.body, req.params.id);
    if(posts){
        res.redirect("/api/posts");
        return;
    }
    res.status(500);
})

router.post("/delete/:id", auth, async (req, res) => {
    const posts = await deletePost(req.params.id);
    if(posts){
        res.redirect("/api/posts");
        return;
    }
    res.status(500);
})


module.exports = router;
