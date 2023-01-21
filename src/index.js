const express=require('express')
const route=require('./route/route')
const mongoose= require('mongoose')
const app= express()


mongoose.set('strictQuery', true);
app.use(express.json())

mongoose.connect("mongodb+srv://Shashi_Shekhar_Singh:Shashi0708@myproject.mb3u3za.mongodb.net/Task-DB?authSource=admin&replicaSet=atlas-lhj98j-shard-0&readPreference=primary&ssl=true",
{useNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 4000,function(){
    console.log("Express app is running on port "+(process.env.PORT||4000))
})