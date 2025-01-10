const express=require("express");
const router=express.Router();
const taskController=require("../controller/taskController")
router.post('/create',taskController.createTask);
router.post('/fetch_all',taskController.fetch_all);
router.get('/fetchById/:id',taskController.fetch_task_by_id)
router.post('/update/:id',taskController.update)
router.post('/delete/:id',taskController.remove);
module.exports=router
