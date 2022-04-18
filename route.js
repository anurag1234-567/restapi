const router=require('express').Router()
const bodyparser=require('body-parser')
const students=require('./mongoose.js')

bparser=bodyparser.json()

//for creating data
router.post("/",bparser,async (req,res)=>{
const student= new students()
student.name=req.body.name
student.class=req.body.class
student.rollno=req.body.rollno
try{
    await student.save()
    res.json(student)
}
catch(err){
    res.json({"message":err.message})
}

})

//for giving all data
router.get("/",async (req,res)=>{
   try{
       const student=await students.find()
       res.json(student)
   }
   catch(err){
       res.json({"message":err.message})
   }
  })

// for giving specific data
router.get("/:id",async (req,res)=>{
    try{
        const student= await students.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.status(404)
        res.json({"message":err.message})
    }
}) 
  

// for updating data
router.put("/:id",bparser,async (req,res)=>{
 try{
 const student= await students.findOneAndUpdate({_id:req.params.id},
    {rollno:req.body.rollno},{new:true})
   res.json(student)
 }
 catch(err){
     res.json({"message":err.message})
 }
})

// for deleting data
router.delete("/:id",async (req,res)=>{
 try{
   await students.findOneAndDelete({_id:req.params.id})
   res.json({"message":"your data is deleted successfully"})
 }
 catch(err){
     res.json({"message":err.message})
 }
})

module.exports=router
