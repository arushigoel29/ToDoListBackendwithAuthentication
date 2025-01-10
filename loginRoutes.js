const express= require("express");
const authController=require("../controller/authenticationController.js")
const router=express.Router();
router.post('/login',authController.loginUser);
router.post('/register',authController.RegisterUser);
module.exports=
    router
