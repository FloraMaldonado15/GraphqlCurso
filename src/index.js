require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/schema.graphql');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_Url, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Conectado a Mongo');
    }
})
const { getAllPosts } = require('./resolvers/Querys');
const { createPost, createUser } = require('./resolvers/Mutations');
const resolvers = {
    Query: {
     getAllPosts 
    }, 
    Mutation: {
        createPost,
        createUser 
    }
  }
  
  const server = new GraphQLServer({ typeDefs, resolvers })
  server.start(() => console.log('Server is running on localhost:4000'))

/*require ('dotenv').config();
const {GraphQLServer} = require ('graphql-yoga');
const {importSchema} = require ('graphql-import');
const mongoose = require ('mongoose');
const typeDefs = importSchema ('./src/schema.graphql');

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}, (err) =>{
    if(!err){
        console.log('Conectado a mongo');
    }
})
const Post = require ('./models/Post');


const {getAllPosts} = require ('../resolvers/Querys');
const {createPost, createUser} = require ('../resolvers/Mutations');


const resolvers ={  
    Query:{
        getAllPosts 
    },  
    Mutation:{         
        createPost,
        createUser 
    }
}
//const Post = require ('./models/Post'); // Se elimina ya que se agrego en sus respectivos archivos
/*const resolvers = {
    Query: {
        saludo: (root, args) => `Hola ${args.name}`,   
        getAllPosts:async(root, args) =>{
            let posts =Post.find();
            //let posts = await Post.find(args.title);
            return posts;
        }    
      
    },
        Mutation: {
            createPost: async (root, args) => {
                let newPost = new Post({
                   // title: args.data.title,
                   // body: args.data.body,
                   // createdAt: args.data.crearedAT ------ igual a
                   ...args.data
                })
                const miPost = await newPost.save(); //el save es asincrono
                return miPost;
            }
        }
  
} */
  /*
  const server = new GraphQLServer({ typeDefs, resolvers })
  server.start(() => console.log('Server is running on localhost:4000'))*/