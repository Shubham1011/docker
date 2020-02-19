const mongoose=require('mongoose')
const comment_schema= mongoose.Schema({
  content:{
    type:String,
    required:'title of the content is required'
  },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }
})
module.exports=mongoose.model('Comment',comment_schema)
