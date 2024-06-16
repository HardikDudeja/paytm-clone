const express = require("express");
const { signupSchema, loginSchema, updateSchema } = require("../inputSchema");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    const validation = signupSchema.safeParse(req.body);
    if(!validation.success){
        return res.status(400).json({errors: validation.error})
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

    const account = new Account({
        userId: newUser._id,
        balance: 10000
    });
    await account.save();

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
    const userId = user._id
    const token = jwt.sign({userId}, process.env.JWT_SECRET)
    res.json({message: "You are logged in now", token: token });
});

// updating the user data

userRouter.put("/", authMiddleware, async (req, res) => {
    const validation = updateSchema.safeParse(req.body);
    if(!validation.success){
        res.status(422).json({errors: validation.error})
    }
    const result = await User.updateOne({userName: req.userName}, req.body)
    if(result.acknowledged){
        res.json({message: "Updated successfully"})
    }
    else{
        res.status(400).json({message: "Failed to update"})
    }
});

userRouter.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter;
    console.log("printing filter", filter);
    try {
        const users = await User.find({
            $or: [
                {firstName: {$regex: filter, $options: 'i'}},
                {lastName: {$regex: filter, $options: 'i'}}
            ]
        });
        res.json({users})
    } catch (error) {
        res.status(404).json({message: "User not found"});
    }
})

module.exports = userRouter;