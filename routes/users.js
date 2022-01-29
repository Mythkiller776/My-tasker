let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mithil:abcd1234...@cluster0.n6rgf.mongodb.net/task?retryWrites=true&w=majority')


let schema = mongoose.Schema(
    {
        content: {
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('tasks',schema)
