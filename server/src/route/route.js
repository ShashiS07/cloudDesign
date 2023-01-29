const express= require('express')
const router= express.Router()
const {createTask,editTask,getTask,deleteTask}=require('../controller/taskController')


router.post('/createtask',createTask)
router.put('/edittask/:taskId',editTask)
router.delete('/deletetask/:taskId',deleteTask)
router.get('/gettask',getTask)

router.all('/*',function(req,res){
    return res.status(404).send({status:false,message:"Invalid http request"})
})



module.exports=router