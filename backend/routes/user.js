const express = require("express");
const { signupSchema } = require("../inputSchema");
const { User } = require("../db");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    const validation = signupSchema.safeParse(req.body);
    if(!validation.success){
        return res.status(400).json({errors: validation.error.errors})
    }

    const user = await User.findOne({
        userName: req.body.userName
    });
    console.log("printing user", user);
    if(user._id){
        return res.status(400).json({
            message: "User Name already exists"
        });
    }
})

module.exports = userRouter;