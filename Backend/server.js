import express from 'express'
import {config} from 'dotenv'
import { connect } from 'mongoose'
import {userRoute} from './APIs/UserAPI.js'
import cors from 'cors'
//create HTTP server
const app=express()

config()
//add cors
app.use(cors({
  origin:["http://localhost:5173"]
}))
// Add body parser middle ware
app.use(express.json())
//forward req to  Apis if path exists
app.use('/user-api',userRoute);
//connet to data base
const connectDB = async()=>{
    try{
        await connect(process.env.MONGO_URL)
        console.log("DB connection success")
        app.listen(process.env.PORT,()=>{
            console.log("server Started Successfully")
        })
    }
    catch(err){
        console.log(err.message)
    }
}

connectDB()


//add error handling middleware
app.use((err,req,res,next)=>{
    // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
})
