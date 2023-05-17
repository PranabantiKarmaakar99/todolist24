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






export const UpdateTodos = async (req, res) => {



    try {


        if (req.method === 'POST')
       
        

            

         {await Todo1.findOneAndUpdate(
             {_id:req.query.id},
             {data:req.body.data} )

             console.log(req.body.data)

             const todos = await Todo1.findById(req.query.id);

        

        // await todos2.save()

        return res.status(200).json(todos);
    } }
    
    catch (error) {
        return res.status(500).json(error.message);
    }
}



export default UpdateTodos;