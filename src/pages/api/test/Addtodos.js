import Connection from '@/lib/db.js';
// import Test from '../../lib/Todo.js';
import Todo1 from '@/lib/Todo.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 
 */

console.log('CONNECTING TO MONGO')
 Connection()
console.log('CONNECTED TO MONGO')

console.log('CREATING DOCUMENT')

const addTodo = async (req, res) => {
        try {

          if (req.method === 'POST') {
            const newTodo = await new Todo1({ 
              data: req.body.data,
              createdAt: Date.now()
            })

            // console.log(req.body.data)
  
          await newTodo.save()
           res.status(201).json(newTodo)
          }
           
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    export default addTodo 

          
