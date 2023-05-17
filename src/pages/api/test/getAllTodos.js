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






export const getAllTodos = async (request, response) => {
    try {
        const todos=await Todo1.find({}).sort({ 'createdAt': -1 })

        // const todos = await Todo1.findById(request.params.id)

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}



export default getAllTodos;