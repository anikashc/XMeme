import express from 'express';
import mongoose from 'mongoose';

import PostMeme from '../models/postMeme.js';

const router = express.Router();

// only allow certain images
function isImageUrl(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/)!=null)
}

// for custom error handling
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// get memes controller
export const getMemes = async (req, res) => { 
    try {

        // used to sort the memes according to created time and limit the request to 100 latest memes only
        const postMessage = await PostMeme.find().sort('-createdAt').limit(100);
                
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get a particular meme
export const getMeme = async (req, res) => { 
    const { id } = req.params;

    try {

        // mongoose requests are promises hence we need to use async await
        const post = await PostMeme.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create a new meme
export const createMeme = async (req, res) => {
    const { name, caption, url } = req.body;

    const newPostMessage = new PostMeme({ name, caption, url })

    try {
        // if the url is not valid throw an error
        if(!isImageUrl(url)) throw new ValidationError('url not valid')

        // save to database
        await newPostMessage.save();

        res.status(201).json({id: newPostMessage.id} );
    } catch (error) {
        // if the error is due to wrong url format
        if(error instanceof ValidationError) res.status(403).json({ message: error.message });
        // anything else
        else res.status(409).json({ message: error.message });
    }
}

export const updateMeme = async (req, res) => {
    const { id } = req.params;
    const { name, caption, url } = req.body;
    
    // if the id is not a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedMeme = { name, caption, url, id: id };

    try {
        // if the updated url is not valid throw an error
        if(!isImageUrl(url)) throw new ValidationError('url not valid')

        // find meme by id and update
        await PostMeme.findByIdAndUpdate(id, updatedMeme, { new: true });

        res.status(200).json(updatedMeme);
    } catch (error) {
        // if the error is due to wrong url format
        if(error instanceof ValidationError) res.status(403).json({ message: error.message });
        // if meme already exists
        else res.status(409).json({ message: error.message });
    }
}

// delete a meme
export const deleteMeme = async (req, res) => {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMeme.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

// increase like count by 1
export const likeMeme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMeme.findById(id);

    const updatedPost = await PostMeme.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;