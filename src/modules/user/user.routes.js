const router = require('express').Router();
const controller = require('./user.controller');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/users/{id}:
  *     get:
  *       tags:
  *       - Users
  *       description: Get one user by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The user's unique ID
  *       responses:
  *         200:
  *           description: An object with a single user's data
  */
 router.get('/:id', controller.getOne);
 
 /**
  * @swagger
  *   /api/users:
  *     post:
  *       tags:
  *       - Users
  *       description: Create a user
  *       responses:
  *         200:
  *           description: User created
  */
 router.post('/', controller.createUser);

 //router.post('/:id', controller.update);

module.exports = router;