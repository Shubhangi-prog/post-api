const User =require('../models/User.js');
const getUsers= async(req,res)=>{
    try{

const users= await User.find();
res.json({message:'successful',data:users})
    }
    catch(err){
res.status(500).json({message:'error'})
    }

}

const createUsers=async(req,res)=>{
    try{
     const {firstName,lastName,email}=req.body;   
     console.log(req.body)
 await User.create({firstName,lastName,email});
res.json({message:'user created successfully'})
    }
    catch(err){
res.status(500).json({message:'error'})
    }

}

const updateUsers= async(req,res)=>{
    try{
        const {id}=req.params;
     const {firstName,lastName,email}=req.body;   
     
 await User.findByIdAndUpdate(id,{firstName,lastName,email});
res.json({message:'user created successfully'})
    }
    catch(err){
res.status(500).json({message:'error'})
    }

}


const deleteUsers=async(req,res)=>{
    try{
        const {id}=req.params;
     
     
 await User.findByIdAndDelete(id);
res.json({message:'user deleted successfully'})
    }
    catch(err){
res.status(500).json({message:'error'})
    }

}
module.exports={
    getUsers,createUsers,updateUsers,deleteUsers
}

