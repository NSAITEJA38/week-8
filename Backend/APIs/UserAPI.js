import express from "express";
import { UserModel } from "../models/UserModel.js";
//create mini express router
export const userRoute=express.Router()
//user API routes 
// create user
userRoute.post('/user',async(req,res)=>{
    const newUser=req.body
    //create user document
    const newUserDocument=new UserModel(newUser)
    //save new user
    let user=await newUserDocument.save()
    //send res
    res.status(200).json({message:"user created",payload:user})
})


//Read all users
userRoute.get('/user',async(req,res)=>{
    //read all users
    let usersList=await UserModel.find({status:true})
    //send res
    res.status(200).json({message:"All Users",payload:usersList})
})



//Read a user by id
userRoute.get('/user/:id',async(req,res)=>{
    let uid=req.params.id
    //find user by id
    let user=await UserModel.findOne({_id:uid,status:true})
    //check user
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"User Details",payload:user})
})
//delete a user by id

userRoute.delete('/user/:id',async(req,res)=>{
    //get user id
    let uid=req.params.id
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
    //check user
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"User Removed"})
})


//Activate user
userRoute.patch('/user/:id',async(req,res)=>{
    //get user id
    let uid=req.params.id
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
    //send res
    res.status(200).json({message:"User Activated",payload:user})
})