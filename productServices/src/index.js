const express= require("express");
const { clerkMiddleware }=require("@clerk/express");

const cors=require("cors");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
app.use(cors());
app.use(clerkMiddleware())
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`)
})