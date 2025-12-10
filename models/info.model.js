import mongoose from 'mongoose';
//Menu schema
const menuSchema = new mongoose.Schema({
  image:{
    type:String,
    default:""
  },
  price:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  }
})

//product info schema
const productInfoSchema = new mongoose.Schema({
  image:{
    type:String,
    default:""
  },
  title:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  }
})

//imon scema
const contactSchema = new mongoose.Schema({
  image:{
    type:String,
    default:""
  },
  title:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    default:""
  },
  phone:{
    type:String,
    default:""
  },
  whatsApp:{
    type:String,
    default:""
  }
})

// main Schema __________________________
const mainSchema = new mongoose.Schema({
  menus:[menuSchema],
  product:[productInfoSchema],
  contact:[contactSchema],
  facebook:{
    type:String,
    default:""
  },
  tiktok:{
    type:String,
    default:""
  },
  youtub:{
    type:String,
    default:""
  },
  whatsApp:{
    type:String,
    default:""
  },
  phone:{
    type:String,
    default:""
  },
  aboutUs:{
    type:String,
    default:""
  },
  ownerImg:{
    type:String,
    default:""
  },
  ownerbio:{
    type:String,
    default:""
  },
  caption:{
    type:String,
    default:""
  }
})

export default mongoose.model("Info",mainSchema);