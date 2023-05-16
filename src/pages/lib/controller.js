// import Todo1 from './Todo.js';

//  export const handler1 = async (request, response) => {
//     try {
//         const newTodo = await Todo1.create({

            
//             data: request.body.data,
//             createdAt: Date.now()
//         })
//         console.log('CREATED DOCUMENT1')
//         await newTodo.save();

//         return response.status(200).json({ success: true, data: newTodo });
//         console.log('CREATED DOCUMENT')
//     } catch (error) {
//         return response.status(500).json({ success: false });
//     }
// }
