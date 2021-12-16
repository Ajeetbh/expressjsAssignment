const mongoose=require('mongoose');

//creat schema
const studentSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    studentFirstName:String,
    collegeName:String,
    location:String
})
module.exports=mongoose.model('Student',studentSchema)