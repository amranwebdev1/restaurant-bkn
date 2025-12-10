import express from 'express';
import {createUser,allUserFind,userDelete,userLogin,protectRoute} from '../controller/user.controller.js';
import {checkLogin} from '../mdl/checkLogin.js';
const router = express.Router();
//user router start
//1 user create 
router.post("/create",createUser);
//2 all user find
router.get("/find",allUserFind);
//3 userDelete
router.delete("/delete/:id",userDelete);
//4 user login
router.post("/login",userLogin);
//5 protectet router
router.get("/pro",checkLogin,protectRoute)
export default router;