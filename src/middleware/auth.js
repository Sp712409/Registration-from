const jwt = require("jsonwebtoken");


const Register = require("../models/register");

const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        const verifyUser = await jwt.verify(token,"iamramveersingandiamafillstackdeveloper")
        next();

    } catch (error) {
      res.status(401).send(error)
    }
}

module.exports = auth;