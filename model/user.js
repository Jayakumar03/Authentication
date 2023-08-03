const mongoose  = require("mongoose")
// Gets mongoose 


// schema
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        default:null
    },

    lastname:{
        type:String,
        default:null
    },

    email:{
        type:String,
        default:null
    },

    password:{
        type:String,
        unique:true
    },
    token : {
        type:String
    }
})




// Exporting model 
// .model accepts two arguements 
// 1. schema name
// 2. schema object => line number 6
module.exports = mongoose.model("user", userSchema)