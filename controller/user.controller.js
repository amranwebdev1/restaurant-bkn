import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const createUser = async (req,res)=>{
  try{
    const {username,email,password} = req.body;
    const hash = await bcrypt.hash(password,10);
    
    const newUser = new User({
      username,
      email,
      password:hash
    })
    await newUser.save();
    res.status(200).json({
      message:"user create successfully"
    })
  }catch(err){
    res.status(505).json({message:"User not created"})
  }
}

//all user find 
export const allUserFind = async (req,res)=>{
  try{
    const findUser = await User.find()
    res.status(200).json(findUser)
  }catch(err){
    res.status(505).json({message:"User not created"})
  }
}

//user delete
export const userDelete = async (req,res)=>{
  try{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    if(!deleteUser){
      res.status(404).json({message:"user not found"})
    }
    res.status(200).json({"message":"user delete successfully","data":deleteUser})
  }catch(err){
    res.status(505).json({message:"User not Delete"})
  }
}


//user login
export const userLogin = async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email:email});
    
    if(user){
      const validPass = await bcrypt.compare(password,user.password)
      
      if(validPass){
        const payload = {
          username:user.username,
          id:user._id,
          email:user.email
        }
        const token = jwt.sign(payload,process.env.JWT_KEY,{expiresIn:"1h"})
        res.status(200).json({"jwt_token":token,"message":"user login successfully"})
      }else{
        res.status(404).json({message:"user invalid password"})
      }
    }
  }catch(err){
    res.status(500).json({message:"User not login"})
  }
}
//protectRoute
export const protectRoute = (req,res)=>{
  res.send("<h1>This is protected route</h1>")
}