const express = require('express')
const app= express()

app.listen(3000,()=>{
    console.log('im alive')
})

app.get('/test',(req,res)=>{
    res.sendStatus(200)
})