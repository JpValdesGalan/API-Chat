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
    createMessage: (req, res) => {
        const message = new Message();
        message.createMessage(author, body, date);
    }
}

module.exports = MessagesController;