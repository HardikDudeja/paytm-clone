const express = require("express");
const { signupSchema, loginSchema } = require("../inputSchema");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    const validation = signupSchema.safeParse(req.body);
    if(!validation.success){
        return res.status(400).json({errors: validation.error.errors})
    }

    const {userName} = req.body

    const user = await User.findOne({
        userName
    });
    if(user){
        return res.status(400).json({
            message: "User Name already exists"
        });
    }

    const newUser = new User(req.body);
    await newUser.save();

    // or do the below
    // const newUser = await User.create(req.body)

    const token = jwt.sign({
        userId: newUser._id
    }, process.env.JWT_SECRET);

    res.status(201).json({message: "User registered successfully", token: token})
});

userRouter.post("/signin", async (req, res) => {
    const validation = loginSchema.safeParse(req.body);
    if(!validation.success){
        return res.status(422).json({errors: validation.error.errors})
    }
    const {userName, password} = req.body;
    const user = await User.findOne({userName});
    if(!user){
        return res.status(404).json({message: "User not found."})
    }
    if(user.password != password){
        return res.status(401).json({message: "Incorrect password."})
    }
    const token = jwt.sign(req.body, process.env.JWT_SECRET)
    res.json({message: "You are logged in now", token: token });
})

module.exports = userRouter;