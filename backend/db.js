require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Connected to database");
});

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model("User", userSchema);


module.exports = {
    User
}
