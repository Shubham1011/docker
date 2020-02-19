const mongoose=require('mongoose')
        mongoose.connect('mongodb://localhost:27017/NodeJs')
const mongodberrors=require('mongoose-mongodb-errors')
mongoose.plugin(mongodberrors)
