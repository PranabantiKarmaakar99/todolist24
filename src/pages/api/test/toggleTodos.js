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






export const toggleTodos = async (req, res) => {

   

    try {


 
       
        const todoRef = await Todo1.findById(req.query.id);

        console.log(todoRef)

        const todos = await Todo1.findOneAndUpdate(
             {_id:req.query.id},
             {done:!todoRef.done} )

        

        // await todos2.save()

        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}



export default toggleTodos;