const express=require ('express');
const router=express.Router();
const {getUsers,createUsers,updateUsers,deleteUsers}=require('../controlllers/users');

router.get('/users',getUsers);
router.post('/users',createUsers)
router.patch('/users/:id',updateUsers)
router.delete('/users/:id',deleteUsers);
module.exports=router;