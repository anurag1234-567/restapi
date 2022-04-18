const express=require('express')
const router=require('./route.js')

const app=express()

app.use("/students",router)

app.listen(3000,(err)=>{
    if(err) throw err;
    else console.log('server is listening on port 3000')
})