import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage =await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createPosts = (req, res) => {
    try {
        
        
        const post = PostMessage(req.body);
        post.save((err)=>{
            if(err) {
                console.log(err.message)
            } else {
                res.status(201).json(req.body);
            }
        })

    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (req, res) => {
    try {
        const {id} = req.body;
        PostMessage.deleteOne({id: id},(err) => {
            if(err) {
                res.status(401).send("unauth")
            } else {
                res.status(201).send("deleted")
            }
        })
    } catch (err) {
        res.status(404).send(err.message)
    }
}

export const updatePost = (req, res) => {
    try {
       const data =  req.body;
       PostMessage.updateOne({_id: data._id},data,(err) => {
        if(err) {
            res.status(404).send(err.message)
        } else {
            res.status(201).send("updated")
        }
       })
    } catch (err) {
        console.log(err.message);
    }
}