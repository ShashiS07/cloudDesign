const express= require('express')
const router= express.Router()




router.all('/*',function(req,res){
    return res.status(404).send({status:false,message:"Invalid http request"})
})



module.exports=router