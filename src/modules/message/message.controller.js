const Message = require("./message.model");

const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then((results) => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const messages = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        console.log('Message created');
    }
}

module.exports = MessagesController;