const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hardikdudeja39:21%40Hardik_39@cohort.blx13io.mongodb.net/", () => {
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
