//1  importaciones
const mongoose = require('mongoose')
//2 schema
const commentSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: 
    {
        type: String,
        required: true
    }
})

// 3 modelo
 const Comment = mongoose.model("Comment", commentSchema);
// 4 exportacion
module.exports = Comment
