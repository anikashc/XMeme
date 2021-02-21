import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

/*  Every function listed below is an action for our redux flow. It fetches the data from
*   the server by invoking the apis from the api file.
*   Actions are the only source of information for the store as per 
*   Redux official documentation. It carries a payload of information from your 
*   application to store. Actions are plain JavaScript object that must have 
*   a type attribute to indicate the type of action performed. It tells us what 
*   had happened. Types are defined as string constants in constants/actionTypes.js
*   Actions are called by dispatch method hence one of the parameters is dispatch.
*/
 
// This is the reducer to get the memes returned by the backend. 
// The api.fetchMemes is an asynchronous function and returns a promise. 
// For this reason we had to use async await. In the subsequent functions
// same thing will be repeated. If any error is encountered, we console log the error.
export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemes();

    // FETCH_ALL type of action invoking the reducer.
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error)   {
    console.log(error.message);
  }
};

// This is the reducer to create a meme.
export const createMeme = (meme) => async (dispatch) => {
  try {
    const { data } = await api.createMeme(meme);
    // CREATE type of action invoking the reducer.
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// This is the reducer to update a meme.
export const updateMeme = (id, meme) => async (dispatch) => {
  try {
    const { data } = await api.updateMeme(id, meme);
    // UPDATE type of action invoking the reducer.
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// This is the reducer to like a meme.
export const likeMeme = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMeme(id);
    // LIKE type of action invoking the reducer.
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// This is the reducer to delete a meme.
export const deleteMeme = (id) => async (dispatch) => {
  try {
    await api.deleteMeme(id);
    // DELETE type of action invoking the reducer.
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};