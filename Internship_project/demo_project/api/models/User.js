const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    email:String,
    password:String
});

module.exports=mongoose.model('User',userSchema);