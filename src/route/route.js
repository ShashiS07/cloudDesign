const express= require('express')
const router= express.Router()
const {createTask,editTask,getTask}=require('../controller/taskController')


router.post('/createtask',createTask)
router.post('/edittask/:taskId',editTask)
router.get('/gettask',getTask)

router.all('/*',function(req,res){
    return res.status(404).send({status:false,message:"Invalid http request"})
})



module.exports=router