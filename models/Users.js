const DataStore = require("nedb-promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = new DataStore({ filename: "./db/users.db", autoload: true });
require("dotenv").config();

module.exports = {
    async register(body) {
        if (
            body.email == "" ||
            body.password == "" ||
            body.repeatPassword == "" 
        )
        return;
        const user = await users.findOne({email: body.email});
        if(user)return;
        const newUser = await users.insert({
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
            role: "admin",
            posts:[],
        });
        return {
            email: newUser.email,
            role: newUser.role,
            posts: newUser.posts,
            userID: newUser._id,
        };
    },
    async auth(body){
        if(body.email == "" || body.password == "") return;
        const user = await users.findOne({ email: body.email});
        if(!user)return;
        const matchPass = await bcrypt.compare(body.password, user.password);
        if(!matchPass) return;
        const token = jwt.sign({
            userID: user._id,
            name: user.name,
            role: user.role,
        },
        process.env.SECRET
        );
        return token;
    },

};