const Task=require("../models/task_model")
const createTask=async(req,resp)=>{
    try{
        const {title,description}=req.body;
        const task =new Task({title,description});
        task.save();
        resp.status(201).json({message:"task created successfully"});
    }catch(error){
        console.log(error);
        resp.status(400).json({message:error.message})
    }
}
const fetch_all=async (req,resp)=>{
    try{
        const task=await Task.find();
        resp.status(200).json({task})

    }catch(error){
        resp.status(400).json({message:error.message})
    }
}
const fetch_task_by_id=async(req,resp)=>{
    try{
        const task=await Task.findById(req.params.id);
        if(task){
            resp.status(200).json({task});
        }
        resp.status(400).json({message:"task not found"})
    }catch(error){
        resp.status(500).json({error:error.message})
    }
}
const update=async(req,resp)=>{
    try{
        const {status}=req.body;
        if(!['pending','ongoing','completed'].includes(status)){
            return resp.status(400).json({message:"wrong value of status is entered"})
        }
        const task=await Task.findByIdAndUpdate(req.params.id,{status},{new:true});
        if(!task){
            resp.status(404).json({message:"task not found "});
        }
        resp.status(200).json({task})
    }catch(error){
        resp.status(500).json({error:error.message});
    }
}
const remove=async(req,res)=>{
    try {
           const task = await Task.findByIdAndDelete(req.params.id);
           if (!task) {
               return res.status(404).json({ message: 'Task not found' });
           }
           res.status(200).json({ message: 'Task deleted successfully' });
       } catch (error) {
           res.status(500).json({ message: error.message });
       }
}
module.exports={
    createTask,
    fetch_all,
    fetch_task_by_id,
    update,
    remove
}
