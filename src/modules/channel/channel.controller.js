const Channel = require("./channel.model");

const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then((results) => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const channel = new Channel();
        channel.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        console.log('Channel created');
    },
    update: (req, res) => {
        console.log('Channel updated');
    }
}

module.exports = ChannelsController;