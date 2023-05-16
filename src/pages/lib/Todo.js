
import mongoose from 'mongoose';

// const Todo1Schema = new mongoose.Schema({
//     data: {
//                 type: String,
//                 required: true
//             },
//             done: {
//                 type: Boolean,
//                 default: false
//             },
//             createdAt: {
//                 type: Date,
//                 default: Date.now

//             }


// });


// module.exports = mongoose.models.Todo1 || mongoose.model('Todo1', Todo1Schema);
// // module.exports = mongoose.models.Todo1 || mongoose.model('Todo1', Todo1Schema);



module.exports = () => {
  

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
    
    
    });
   
    return  mongoose.model('Todo1', Todo1Schema)
   }