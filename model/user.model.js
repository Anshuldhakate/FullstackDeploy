const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    username: String,
    pass: String,
    email: String
},{
    versionKey: false
})

const UserModel= mongoose.model("user", userSchema)

module.exports={
    UserModel
}