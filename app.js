const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const registeredUsers = require('./models/registeredUsers');
require('dotenv').config()
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI,(error)=>{
    if(error) console.log(error);
    else console.log("Database Connected");
})


app.get('/',(req,res)=>{
    res.json("success");
})

app.get('/get',async(req,res)=>{
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