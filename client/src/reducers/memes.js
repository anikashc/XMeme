import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

/*  Reducers are a pure function in Redux. Pure functions are predictable. 
*   Reducers are the only way to change states in Redux. It is the only place where you 
*   can write logic and calculations. Reducer function will accept the previous state of 
*   app and action being dispatched, calculate the next state and returns the new object.
*
*   The following few things should never be performed inside the reducer −
*
*   - Mutation of functions arguments
*   - API calls & routing logic
*   - Calling non-pure function e.g. Math.random()
*/

// The function follows a series of switch statements as per the type of action which
// invokes the reducer. Initial state is defined to prevent redux from defining undefined state.
export default (memes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    // matches the current payloads id from the meme array and is index matches, returns the payload
    case LIKE:
      return memes.map((meme) => (meme.id === action.payload.id ? action.payload : meme));

    // appends a new meme to the array and appends it to the front.
    case CREATE:
      return [action.payload,...memes];

    // matches the current payloads id from the meme array and is index matches, returns the payload
    case UPDATE:
      return memes.map((meme) => (meme.id === action.payload.id ? action.payload : meme));

    // filters out the current meme from the array of memes and deletes it from the array
    case DELETE:
      return memes.filter((meme) => meme.id !== action.payload);
    default:
      return memes;
  }
};