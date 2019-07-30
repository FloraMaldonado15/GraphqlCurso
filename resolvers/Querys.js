const Post = require ('../src/models/Post');

const getAllPosts = async (root, args) =>{
    let posts = await Post.find({title:args.title});
    return posts;
}    

module.exports = {
    getAllPosts
}