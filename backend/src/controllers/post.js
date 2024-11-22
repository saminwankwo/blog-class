import Post from "../models/post.js";

export const createPost = async(req, res) => {

    const {userId, title, body, image } = req.body

    const post = new Posts({
        userId,
        title,
        body,
        image
    })

    await post.save();
    res.status(201).json({
        message:"post created"
    })

}

export const viewPost = async(req, res)=> {
    const posts = await Post.find()

    res.json(posts)
}