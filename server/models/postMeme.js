import mongoose from 'mongoose';
import toJson from 'meanie-mongoose-to-json'
// mongoose schema model
const postSchema = mongoose.Schema({
    
    name: String,
    caption: String,
    url: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    
},{timestamps:true})

// Duplicate POST requests with the same payload (name/url/caption) shall return 409.
postSchema.index( { name: 1, caption: 1, url: 1 }, {unique:true} )

postSchema.plugin(toJson)


var PostMeme = mongoose.model('PostMeme', postSchema);


export default PostMeme;