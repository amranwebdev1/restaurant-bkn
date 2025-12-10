import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const checkLogin = async (req,res,next)=>{
  const {authorization} = req.headers;
  if(!authorization){
    return res.status(401).json({ message: "Authorization header missing" });
  }
  try{
    const token = authorization.split(" ")[1];
    if(!token){
      return res.status(401).json({ message: "Token missing" });
    }
    const decoded = jwt.verify(token,process.env.JWT_KEY);
    const {username,id,email} = decoded;
    req.username = email
    req.id = id
    req.email = email
    next()
  }catch(err){
    res.status(500).json({message:"Authorization faild"})
  }
}