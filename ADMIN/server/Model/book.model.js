const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    bookName:String,
    author:String,
    link:String,
    dlink:String,
    description:String,
    image:String,
})
const BookModel=mongoose.model('Books',bookSchema)
module.exports=BookModel