const router = require('express').Router();
const controller = require('./channel.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of 
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *   /api/channels/{id}:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get one channel by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
router.get('/:id', controller.getOne);

/**
 * @swagger
 *   /api/channels:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create a channel
 *       responses:
 *         200:
 *           description: Channel created
 */
router.post('/:id', controller.create);

/**
 * @swagger
 *   /api/channels/{id}:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create a channel
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *       responses:
 *         200:
 *           description: Updated channel
 */
router.post('/:id', controller.update);

module.exports = router;