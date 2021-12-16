// const express=require('express')
// const router=express.Router();
// const mongoose=require('mongoose');
// const Student=require('../model/student')

// router.get('/getDetails',(req,res)=>{
//     res.status(200).json({
//         result:"success get"
//     })
// })

// router.post('/add',(req,res)=>{
//     // console.log(req.body);
//     // res.status(200).json({
//     //     result:"success"
//     // })
//     //here store data in db
//     const student=new Student({
//         _id:new mongoose.Types.ObjectId,
//         studentFirstName:req.body.studentFirstName,
//         collegeName:req.body.collegeName,
//         location:req.body.location
//     })
//     student.save()
//     .then(result=>{
//         console.log(result);
//         res.status(200).json({
//             newStudent:result
//         })
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     })
// })
// module.exports=router


const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const Student=require('../model/student')


router.post('/add',(req,res)=>{
    // console.log(req.body);
    // res.status(200).json({
    //     result:"success"
    // })
    //here store data in db
    const student=new Student({
        _id:new mongoose.Types.ObjectId,
        studentFirstName:req.body.studentFirstName,
        collegeName:req.body.collegeName,
        location:req.body.location
    })
    student.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

router.get('/getDetails',(req,res)=>{
    // res.status(200).json({
    //     result:"success get"
    // })
    Student.find()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports=router