const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/studentdb',
{useNewUrlParser:true},()=>{
    console.log("connected with database")
})

const schema= new mongoose.Schema({
    name:{type:String, required:true},
    class:{type:String, required:true},
    rollno:{type:Number, required:true}
})

const students= mongoose.model('student',schema)
module.exports=students