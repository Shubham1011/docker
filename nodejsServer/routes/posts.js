const route=require('express').Router()
const mongoose=require('mongoose')
const Post=mongoose.model('Post')
const Comment=mongoose.model('Comment')

route.get('/getallposts',async (req,res)=>{
  try{
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
 res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  var posts= await Post.find({}).populate('comments')
res.send(posts)
}
catch(error){
res.send(500)
}
})

route.post('/addpost',async (req,res)=>{
try {
var post=new  Post()
post.title=req.body.title
post.content=req.body.content
await post.save()
console.log(post);
res.send(post)
 
} catch (e) {
res.send(e)
}
 
})
route.get('/getbyid/:id',async (req,res)=>{
  try {
    const post= await Post.findOne({_id:req.params.id})
    res.send(post)
  } catch (e) {
 
  }
 
})
 route.put('/updatebyid/:id',async (req,res)=>{
  try {
    const post= await Post.findByIdAndUpdate({
      _id:req.params.id
    },req.body,{
      new:true,
      runValidators:true
    })
    res.send(post)
  } catch (e) {
res.send(e)
  }
})
 
route.delete('/deletebyid/:id',async (req,res)=>{
  try {
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
 res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    const post=await Post.findByIdAndRemove({
      _id:req.params.id
    })
    res.send(post)
  } catch (e) {
res.send(e)
  }
} )

//add comment to post
route.post('/:postid/addcomment', async (req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
 res.setHeader('Access-Control-Allow-Credentials', true); // If needed

   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // If needed
const post= await Post.findOne({_id:req.params.postid})
var comment=new Comment()
comment.content=req.body.content
comment.post=post._id
await comment.save()
post.comments.push(comment)
await post.save()
res.send(post)
})

route.get("/getcommentbypostid/:pid",async (req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
 res.setHeader('Access-Control-Allow-Credentials', true); // If needed
const comments=[]
const post= await Post.findOne(({_id:req.params.pid})).populate('comments')
res.send(post.comments)
})

route.put("/editcomment/:cid", async (req,res)=>{
  const comment=await Comment.findByIdAndUpdate({_id:req.params.cid},req.body,{new:true})
  res.send(comment)


} )

route.delete('/deletecommentbyid/:cid',async(req,res)=>{
  const comment=await Comment.findByIdAndRemove({
    _id:req.params.cid
  })
  res.send(comment)
})


module.exports=route;
