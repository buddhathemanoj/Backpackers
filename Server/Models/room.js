const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    maxcount:{
        type:Number,
        required: true
    },
    rentperday:{
        type:Number,
        required: true
    },
    imageurls: [],
    currentbooking:[],
 
   
} ,{
        timestamps : true,
    })

const roomModel = mongoose.model('rooms' , roomSchema)

module.exports = roomModel;