const mongoose =require("mongoose");

const LoginModel=new mongoose.Schema({
    name:String,
    mob:Number
}
)
const Login=mongoose.model("User",LoginModel)
module.exports=Login