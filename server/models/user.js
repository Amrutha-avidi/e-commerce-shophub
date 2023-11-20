const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, require:true, minlegth:3, maxlength:40},
    email:{
        type:String,
        require:true,
        minlegth:3,
        maxlength:50,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        minlegth:6,
        maxlength:1024,

    }
})

const User = mongoose.model('User',userSchema)

exports.User = User