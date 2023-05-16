// import clientPromise from "../../lib/mongodb";
// import Todo from '../model/Todo.js';

// export default async function handler(req, res) {
//   const client = await clientPromise;
//   const db = client.db("TDL24");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let newTodo = await Todo.create({
//         data: bodyObject,
//         createdAt: Date.now()
//     })

//     await newTodo.save();

//     return res.status(200).json(newTodo);
    
//     // res.json(newTodo);
//     //   break;
//     // case "GET":
//     //   const allPosts = await db.collection("allPosts").find({}).toArray();
//     //   res.json({ status: 200, data: allPosts });
//     //   break;
//   }
// }


// // import Todo from '../model/Todo.js';

// //  const handler = async (request, response) => {
// //     const client = await clientPromise;
// //     const db = client.db("Mern-ToDo");
// //     try {
// //         const newTodo = await Todo.create({
// //             data: request.body.data,
// //             createdAt: Date.now()
// //         })

// //         await newTodo.save();

// //         return response.status(200).json(newTodo);
// //     } catch (error) {
// //         return response.status(500).json(error.message);
// //     }
// // }

// // export default handler;