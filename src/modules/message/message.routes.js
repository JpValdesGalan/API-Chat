const router = require('express').Router();
const controller = require('./message.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of 
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *       - Messages
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);

/**
 * @swagger
 *   /api/messages:
 *     post:
 *       tags:
 *       - Messages
 *       description: Create a message
 *       responses:
 *         200:
 *           description: Message created
 */
 router.post('/', controller.create);

  /**
  * @swagger
  *   /api/messages/{id}:
  *     post:
  *       tags:
  *       - Messages
  *       description: Create a message
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: Updated message
  */
   router.post('/:id', controller.update);

module.exports = router;