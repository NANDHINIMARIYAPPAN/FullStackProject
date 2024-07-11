const mongoose = require('mongoose');
const schema = mongoose.Schema
const ContactSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

let contacts = mongoose.model('contactUs', ContactSchema)

module.exports = contacts