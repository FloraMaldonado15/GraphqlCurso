const Post = require ('../src/models/Post');
const User = require ('../src/models/User');

const  createPost = async (root, args) => {
    let newPost = new Post({
       // title: args.data.title,
       // body: args.data.body,
       // createdAt: args.data.crearedAT ------ igual a
       title:args.data.title,
       body:args.data.body,
       createdAt:args.data.createdAt,
       user:args.data.user
    })
    const miPost = await newPost.save(); //el save es asincrono
    const post = await Post.findOne({_id:miPost._id}).populate('user')
    return post;
}

const createUser = async(root, args) =>{
    let newUser = new User({
        ...args.data
    })
    const user = await newUser.save();
    return user;
}

module.exports = {
    createPost,
    createUser
}