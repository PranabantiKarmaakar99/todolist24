import Connection from '../../lib/db.js';
// import Test from '../../lib/Todo.js';
import Todo1 from '../../lib/Todo.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
//   try {
    // const { method } = req
    console.log('CONNECTING TO MONGO')
    await Connection()
    console.log('CONNECTED TO MONGO')

    console.log('CREATING DOCUMENT')
  

    // switch (method) {
        // case 'GET':
        //   try {
        //     const newTodo2 = await Todo1.find({})
        //     res.status(200).json({ success: true, data: newTodo2 })
        //   } catch (error) {
        //     res.status(400).json({ success: false })
        //   }
        //   break
        // case 'POST':
          // try {
          //   console.log('CREATED DOCUMENT1')
          //   const newTodo = await new Todo1.create({ 
          //       data: req.body.data,
          //       createdAt: Date.now()
          //     })

          //   await newTodo.save()
          //   res.status(201).json({ success: true, data: newTodo })
          //   console.log('CREATED DOCUMENT')
          // } catch (error) {
          //   res.status(400).json({ success: false })
          // }
        //   break
        // default:
        //   res.status(400).json({ success: false })
        //   break

        // if (req.method === 'GET') {
        //   res.status(200).json(data)
        // } 
        
        if (req.method === 'POST') {
          // const data = req.body.data
          // const newComment = {
          //   id: Date.now(),
          //   text: comment
          // }
          // comments.push(newComment)
         

          const newTodo = await new Todo1({ 
            data: req.body.data,
            createdAt: Date.now()
          })

        await newTodo.save()
         res.status(201).json(newTodo)
        }
      }
          
    // }

    // export const addTodo = async (request, response) => {

    //     console.log('CONNECTING TO MONGO')

    //     await Connection()

    //     console.log('CONNECTED TO MONGO')

    //     console.log('CREATING DOCUMENT')
    //     try {
    //         const newTodo = await Todo1.create({
    //             data: request.body.data,
    //             createdAt: Date.now()
    //         })
    
    //         await newTodo.save();

    //         console.log('CREATED DOCUMENT1')
    
    //         return response.status(200).json(newTodo);
    //     } catch (error) {
    //         return response.status(500).json(error.message);
    //     }
    // }

