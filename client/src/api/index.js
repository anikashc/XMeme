import axios from 'axios';

// Axios is a popular, promise-based HTTP client that sports an easy-to-use API 
// and can be used in both the browser and Node. js. 

// this is where our client side connects to the server for exchanging data through APIs
const url = 'http://localhost:8081/memes';

export const fetchMemes = () => axios.get(url);
export const createMeme = (newPost) => axios.post(url, newPost);
export const likeMeme = (id) => axios.patch(`${url}/${id}/likePost`);
export const updateMeme = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);