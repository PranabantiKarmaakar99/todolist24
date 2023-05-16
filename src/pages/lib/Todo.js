// import mongoose from "mongoose";


// const TodoSchema = new mongoose.Schema({
//     data: {
//         type: String,
//         required: true
//     },
//     done: {
//         type: Boolean,
//         default: false
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// })

// const todos = _mongoose.model('todos', TodoSchema);

// export default todos;

// import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';

const Todo1Schema = new mongoose.Schema({
    data: {
                type: String,
                required: true
            },
            done: {
                type: Boolean,
                default: false
            },
            createdAt: {
                type: Date,
                default: Date.now

            }

//     name: String,
//     email: {
//     type: String,
//     // required: true,
//     // unique: true,
//   },

//   name: String,
//   email: String

});

// const Todo = models.Todo || model('Todo', TodoSchema);
module.exports = mongoose.models.Todo1 || mongoose.model('Todo1', Todo1Schema)

// export default Todo;