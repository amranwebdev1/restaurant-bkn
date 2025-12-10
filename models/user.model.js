import mongoose from 'mongoose';
const userScema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  time:{
    type:Date,
    default:Date.now()
  }
})
const User = mongoose.model("User",userScema);
export default User