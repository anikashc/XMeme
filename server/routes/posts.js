import express from 'express';

import { getMemes, getMeme, createMeme, updateMeme, deleteMeme, likeMeme } from '../controllers/posts.js';

const router = express.Router();

/**
 * @swagger
 * definitions:
 *  meme:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the creator
 *     example: 'Anikash'
 *    caption:
 *     type: string
 *     description: a funny caption describing the meme
 *     example: 'The funniest meme'
 *    url:
 *     type: string
 *     description: path of the meme image
 *     example: 'https://thepsychologist.bps.org.uk/sites/thepsychologist.bps.org.uk/files/img_9685.jpg'
 */

/**
  * @swagger
  * /memes/:
  *  get:
  *   summary: get memes
  *   description: get all memes stored in database
  *   produces:
  *   - 'application/xml'
  *   - 'application/json'
  *   responses:
  *    200:
  *     description: succesfully fetched all memes
  *     schema:
  *      $ref: '#/definitions/meme'
  *    404:
  *     description: failure
  */


router.get('/', getMemes);



 /**
  * @swagger
  * /memes/:
  *  post:
  *   summary: create meme
  *   description: create meme and store in database
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/meme'
  *   responses:
  *    201:
  *     description: meme created succesfully
  *    409:
  *     description: failure in creating meme as conflict with an existing meme
  *    403:
  *     description: Forbidden-invalid image url
  */
router.post('/', createMeme);


/**
  * @swagger
  * /memes/{meme_id}:
  *  get:
  *   summary: get meme
  *   description: get a particular meme stored in database
  *   produces:
  *   - 'application/xml'
  *   - 'application/json'
  *   parameters:
  *   - name: 'meme_id'
  *     in: 'path'
  *     description: 'ID of meme to return'
  *     required: true
  *   responses:
  *    200:
  *     description: succesfully fetched meme
  *     schema:
  *      $ref: '#/definitions/meme'
  *    404:
  *     description: failure
  */
router.get('/:id', getMeme);

/**
  * @swagger
  * /memes/{meme_id}:
  *  patch:
  *   summary: update meme
  *   description: update a particular meme stored in database
  *   parameters:
  *   - name: 'meme_id'
  *     in: 'path'
  *     description: 'ID of meme to update'
  *     required: true
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/meme'
  *   responses:
  *    200:
  *     description: succesfully updated meme
  *    409:
  *     description: failure in updating meme as conflict with an existing meme
  *    403:
  *     description: Forbidden-invalid image url
  */
//patch used for updating existing memes
router.patch('/:id', updateMeme);

/**
 * @swagger
 * /memes/{meme_id}:
 *  delete:
 *   summary: delete meme
 *   description: delete a meme
 *   parameters:
 *   - name: 'meme_id'
 *     in: 'path'
 *     description: 'ID of meme to delete'
 *     required: true
 *   responses:
 *    200:
 *     description: successfully deleted
 *    404:
 *     No meme with id
 */

router.delete('/:id', deleteMeme);


/**
  * @swagger
  * /memes/{meme_id}/likePost:
  *  patch:
  *   summary: Like a meme
  *   description: increase like count by 1
  *   parameters:
  *   - name: 'meme_id'
  *     in: 'path'
  *     description: 'ID of meme to like'
  *     required: true
  *   responses:
  *    200:
  *     description: succesfully liked a meme
  *     schema:
  *      $ref: '#/definitions/meme'
  *    404:
  *     description: failure
  */

//patch used for updating likes
router.patch('/:id/likePost', likeMeme);

export default router;