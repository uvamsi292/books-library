var express = require('express');
var router = express.Router();
var userModel=require('../Model/user.model')
router.post('/',(req,res)=>{
  let newUser=new userModel({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
  })
  newUser.save()
  .then(response=>{res.send(response)})
  .catch(err=>{res.send(err)})
})
router.get('/',(req,res)=>{
  userModel.find()
  
  .then(response=>{res.send(response)})
  .catch(err=>{res.send(err)})
  
})
router.put('/:id',(req,res)=>{
  userModel.findByIdAndUpdate(req.params.id,{
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
    
  })
  .then(response=>{res.send(response)})
  .catch(err=>{res.send(err)})
})
router.delete('/:id',(req,res)=>{
  userModel.findByIdAndDelete(req.params.id)
  .then(response=>{res.send(response)})
  .catch(err=>{res.send(err)})
})




module.exports = router;