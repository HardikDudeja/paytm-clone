require('dotenv').config();
const mongoose = require("mongoose");
const {Schema} = require("mongoose");


mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("connected to DB");
})

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    balance: {type: Number, required: true}
});


const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);


module.exports = {
    User,
    Account
}
