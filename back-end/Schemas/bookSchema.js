const mongoose=require('mongoose');

const books=new mongoose.Schema({
    authorName:String,
    title:String,
    description:String
})

module.exports=mongoose.model('bookLibrary',books,'bookLibrary')