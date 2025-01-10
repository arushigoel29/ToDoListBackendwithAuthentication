const mongoose =require("mongoose");
const task_schema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requied:true
    },
    status:{
        type:String,
        enum:['pending','ongoing','completed'],
        default:'pending'
    }
})

const Task = mongoose.model('Task', task_schema);

module.exports = Task; 
