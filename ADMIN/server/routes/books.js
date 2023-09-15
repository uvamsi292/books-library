const express=require('express')
const mongoose=require('mongoose')
const BookModel=require('../Model/book.model')
const router=express.Router()
// router.post('/',(req,res)=>{
//     let newBook=new BookModel({
//         bookName:req.body.bookName,     //by using body in postman
//         author:req.body.author,
//         link:req.body.link,
//     })
//     newBook.save()
//     .then(response=>{
//         res.send(response)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })
router.get('/',(req,res)=>{
    BookModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.put('/:id',(req,res)=>{
    const idQuery=req.params.id
    BookModel.findByIdAndUpdate(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    BookModel.findByIdAndDelete(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports=router