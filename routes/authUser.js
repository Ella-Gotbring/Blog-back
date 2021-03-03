const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    async verify(req, res, next){
        const token = req.cookies.verify;if(!token){
            return false;
        }else{
            try{
                const auth = jwt.auth(token, process.env.SECRET);
                req.user = auth;
            }catch (error){
                console.log(error);
            }
        }
        next();
    },

}