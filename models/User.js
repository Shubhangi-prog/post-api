const mongoose=require('mongoose');

const User=mongoose.model('User',{
    firstName:String,
    lastName:String,
    email:String
})
module.exports=User