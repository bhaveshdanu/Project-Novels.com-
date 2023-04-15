const mongoose=require('mongoose');

const emp=mongoose.Schema({
    name:String,
    email:String,
    password:String

});

module.exports=mongoose.model('empdetail',emp,'empdetail')