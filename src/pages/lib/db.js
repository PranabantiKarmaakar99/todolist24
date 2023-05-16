import mongoose from "mongoose";


 const Connection = () => {

    const MONGODB_URI="mongodb+srv://PranabantiKarmaakar:uTGhBmMQLKf879Em@mern-todo.bhgnkwo.mongodb.net/?retryWrites=true&w=majority";
   


    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});



    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })



}

export default Connection;

// import mongoose from 'mongoose'

// /** 
// Source : 
// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
// **/


// // const MONGODB_URI = process.env.MONGODB_URI
// const MONGODB_URI="mongodb+srv://PranabantiKarmaakar:uTGhBmMQLKf879Em@mern-todo.bhgnkwo.mongodb.net/?retryWrites=true&w=majority";




// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect () {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false,
//       bufferMaxEntries: 0,
//       useFindAndModify: true,
//       useCreateIndex: true
//     }

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
//       return mongoose
//     })
//   }
//   cached.conn = await cached.promise
//   return cached.conn
// }

// export default dbConnect