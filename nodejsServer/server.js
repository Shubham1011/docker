const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const cors=require('cors')
require('express-async-errors')
var app=express()
require('./mongo')
require('./model/Post')
require('./model/Comment')
app.use(cors())
app.use(bodyParser.json())
app.use(morgan())
var db = mongoose.connection;

app.use("/post",require('./routes/posts'))
app.use((req,res,next)=>{
  req.status=404
  const error=new Error("Someones's altered your url !! we donot have such path")
  next(error)
})
if(app.get('env')==='production')
{
app.use((error,req,res,next)=>{
  res.status(req.status || 500).send({
    message:error.message,

  })
})
}
app.use((error,req,res,next)=>{
  res.status(req.status || 500).send({
    message:error.message,
    stack:error.stack
  })
})
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Successful!");
});
const Post=mongoose.model('Post')
app.listen(3000,()=>{
  console.log("listening on port 3000");
})
