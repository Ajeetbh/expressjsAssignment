const express=require('express')
const app=express()
const studentRoute=require('./api/routes/student')
const bodyParser=require("body-parser")

//connect nodejs with db
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://student:1234@cluster1.ri1gj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})
mongoose.connection.on('connected',connected=>{
    console.log('connected with database...');
})

//when write something in body in json format use body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/student',studentRoute)

app.use((req,res)=>{
    res.status(200).json({
        message:"my app is created"
    })
})
module.exports=app

