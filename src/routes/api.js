const router = require('express').Router();

const usersRoutes = require('../modules/user/user.routes');
const channelsRoute = require('../modules/channel/channel.routes');
const messagesRoute = require('../modules/message/message.routes');

router.use('/users', usersRoutes);
router.use('/channels', channelsRoute);
router.use('/messages', messagesRoute);

module.exports = router;

