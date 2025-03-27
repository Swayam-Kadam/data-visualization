const mongoose = require('mongoose')
const {Schema} = mongoose

const DatasetSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
},
    title:{type:String},
    data: [
      {
        name: {type:String,required:true},
        value: {type:Number,required:true},
      },
    ],
  }, { timestamps: true })

  module.exports = {DatasetSchema}