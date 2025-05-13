const mongoose=require("mongoose");
const express=require("express")
const cors =require("cors")

const Login=require("../Server/Models/Login")
const app=express();
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/AtoZ")

app.post("/add",(req,res)=>{
   const name=req.body.name;
   const mob=req.body.mob;
   Login.create({
    name:name,
    mob:mob
   }).then(result=>res.json(result)).catch(err=>res.json(err))

})

// app.get()
app.listen(3005,()=>{
    console.log("Connected Successfully");
})