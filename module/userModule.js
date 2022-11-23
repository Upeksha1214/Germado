const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    studentId :{
        type:ObjectId,
        required:true,
    },

    name :{
        type:String,
        required:true
    },

    email :{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    birthday:{
        type:String,
        required:true
    },

    courseName:{
        type:String,
        required:true
    },

    courseDuration:{
        type:String,
        required:true
    },

    olResult:{
        type:String,
        required:true
    },

    alResult:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Post',userSchema)