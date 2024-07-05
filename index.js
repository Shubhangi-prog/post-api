const express =  require('express');
const app=express();
const ejs=require('ejs');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const userRoutes=require('./routes/users.js')

app.set('view-engine','ejs');
app.use(bodyParser.urlencoded())
app.use(userRoutes);




app.get('/',(req,res)=>{
    res.send("first server");
})





app.listen(3000,(req,res)=>{
    mongoose.connect(process.env.URL).then((data)=>{
    console.log("db connected and server is up and running")
}).catch((err)=>{
    console.log("error");
})


})