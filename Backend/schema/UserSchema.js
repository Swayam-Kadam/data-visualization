const {Schema} = require('mongoose');

const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
    },
    number:{
        type:Number
    },
    gender:{
        type:String
    },
    role:{
        type:String,
        default:'user',
        enum: ['user', 'admin'],
    },
},
{ timestamps: true }
)

module.exports = {UserSchema};