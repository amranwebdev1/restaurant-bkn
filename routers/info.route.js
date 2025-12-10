import express from 'express';
import {createInfo,updateMainInfo,menuAdd,menuUpdate,deleteMenu,productAdd,productUpdate,deleteProduct,contactAdd,contactUpdate,deleteContact,infoFind} from '../controller/info.controller.js';

const router = express.Router();

//info create 
router.post("/create",createInfo);
//info 
router.get("/",infoFind)
//update main info 
router.put("/update",updateMainInfo)



//menu add 
router.post("/menu/add",menuAdd)
//update menu 
router.put("/menu/update/:id",menuUpdate)
//deleteMenu
router.delete("/menu/delete/:id",deleteMenu);


//product add 
router.post("/product/add",productAdd)
//updproductmenu 
router.put("/product/update/:id",productUpdate)
//delete product
router.delete("/product/delete/:id",deleteProduct);


//contact add 
router.post("/contact/add",contactAdd)
//updproducontact
router.put("/contact/update/:id",contactUpdate)
//delete contact
router.delete("/contact/delete/:id",deleteContact);
export default router;