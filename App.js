import express from "express";
import connectDB from './config/db.js';
import UserRouter from './routers/user.route.js';
import InfoRouter from './routers/info.route.js';
import cors from 'cors';
const app = express();
app.use(cors())
connectDB()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// user router
app.use("/user",UserRouter);
//info route 
app.use("/info",InfoRouter);
//testing
app.get("/",(req,res)=>{
  res.send("Hi my I am Amran")
})
//error route 
app.use((req,res,next)=>{
  console.log("404 route error")
})
app.use((err,req,res,next)=>{
  console.log("500 server error");
})
export default app;