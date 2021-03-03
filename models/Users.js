const DataStore = require("nedb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    async register(body) {
        if (
            body.name == "" ||
            body.email == "" ||
            body.password == "" ||
            bosy.repeatPassword ==

        )
        return;
        const user = await users.findOne({email: body.email});
        if(user)return;
        const newUser = await users.insert({
            name: body.name,
            email: body.email,
            role: "admin",
            posts:[],
        });
        return {
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            posts: newUser.posts,
            userID: newUser._id,
        };
    }

}