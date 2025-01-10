const User=require("../models/user_model");
const jwt=require("jsonwebtoken");

const loginUser=async(req,resp)=>{
    const {username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user){
            return resp.status(404).json({error:"user not found"});
        }
        const isMatched=user.comparePassword({password});
        if(!isMatched){
            return resp.status(400).json({error:"password is incorrect"});
        }
        //if the password entered by the user and the password in the database matches then assign a token to the user 
        const token=jwt.sign({username},'secretkey',{expiresIn:'1h'});
        resp.status(200).json({message:'login successful',token});
    }catch(error){
        console.error(error);
        resp.status(400).json({error:'error logging in'})

    }

}
 
const RegisterUser=async(req,resp)=>{
    const { username,password }=req.body;
    try{
    const user =new User({username,password});
    await user.save();
    resp.status(201).json('user registered successfully');
    }catch(error){
        console.log(error);
        resp.status(400).json('error while registerting a user ')
    }

}
module.exports={
    loginUser,
    RegisterUser
}
