import Info from '../models/info.model.js';
export const createInfo = async (req,res)=>{
  try{
    const data = await Info.findOneAndUpdate({},req.body,{upsert:true,new:true})
    
    res.json({success:true,data})
  }catch(err){
    res.status(501).json({message:err.message})
  }
}
//find info 
 export const infoFind = async (req,res)=>{
  try{
    const data = await Info.findOne({});
    res.json({success:true, data});
  }catch(err){
    res.status(501).json({success:false,message:err.message});
  }
};
//updateMainInfo updateMainInfo
export const updateMainInfo = async (req,res)=>{
  try{
    const data = await Info.findOneAndUpdate({},req.body,{new:true});
    
    res.json({success:true,data})
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}
//___________________________________________________
// menu add 
export const menuAdd = async (req,res)=>{
  try{
    const data = await Info.findOneAndUpdate({},{$push:{menus:req.body}},{new:true});
    
    res.status(200).json({
      success:true,
      data
    })
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}

//updateMainInfo
export const menuUpdate = async (req,res)=>{
  try{
    const {id} = req.params;
    const data = await Info.findOneAndUpdate({"menus._id":id},{$set:{"menus.$.name":req.body.name,"menus.$.price":req.body.price,"menus.$.image":req.body.image}},{new:true})
    
    res.status(200).json({
      success:true,
      data
    })
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}

//delete menu 
export const deleteMenu = async(req,res)=>{
    const {id}=req.params;

    const data = await Info.findOneAndUpdate(
        {},
        {$pull:{menus:{_id:id}}},
        {new:true}
    );

    res.json({success:true,data});
};

//___________________________________________________
export const productAdd = async (req,res)=>{
  try{
    const data = await Info.findOneAndUpdate({},{$push:{product:req.body}},{new:true});
    
    res.status(200).json({
      success:true,
      data
    })
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}

//update product
export const productUpdate = async (req,res)=>{
  try{
    const {id} = req.params;
    const data = await Info.findOneAndUpdate({"product._id":id},{$set:{"product.$.image":req.body.image,"product.$.title":req.body.title,"product.$.desc":req.body.desc}},{new:true})
    
    res.status(200).json({
      success:true,
      data
    })
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}

//delete product
export const deleteProduct = async(req,res)=>{
    const {id}=req.params;

    const data = await Info.findOneAndUpdate(
        {},
        {$pull:{product:{_id:id}}},
        {new:true}
    );

    res.json({success:true,data});
};

//contact
//___________________________________________________
export const contactAdd = async (req,res)=>{
  try{
    const data = await Info.findOneAndUpdate({},{$push:{contact:req.body}},{new:true});
    
    res.status(200).json({
      success:true,
      data
    })
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}

//update contact
export const contactUpdate = async (req,res)=>{
  try{
    const {id} = req.params;
    const data = await Info.findOneAndUpdate({"contact._id":id},{$set:{"contact.$.image":req.body.image,"contact.$.title":req.body.title,"contact.$.desc":req.body.desc,"contact.$.phone":req.body.phone,"contact.$.whatsApp":req.body.whatsApp}},{new:true})
    
    res.status(200).json({
      success:true,
      data
    })
  }catch(err){
    res.status(501).json({
      success:false,
      message:err.message
    })
  }
}

//delete contact
export const deleteContact = async(req,res)=>{
    const {id}=req.params;

    const data = await Info.findOneAndUpdate(
        {},
        {$pull:{contact:{_id:id}}},
        {new:true}
    );

    res.json({success:true,data});
};


