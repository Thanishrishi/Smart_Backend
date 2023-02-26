const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const registeredUsers = require('./models/registeredUsers');
mongoose.connect('mongodb://127.0.0.1:27017/myapp',(error)=>{
    if(error) console.log(error);
    else console.log("Database connected at local");
})


app.get('/',(req,res)=>{
    res.json("success");
})

app.post('/post',async(req,res)=>{
   const thanish  = registeredUsers();
   try{

       thanish.Username = "Thanishrishi";
       thanish.Email = "Thanishrishi43@gmail.com";
       thanish.Password = "Thanish824";
       await thanish.save();
   }catch(error){
    res.json("error");
   }
})
app.listen(3000,(req,res)=>{
console.log('success')
})