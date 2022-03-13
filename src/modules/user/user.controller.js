const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then((results) => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    createUser: (req, res) => {
        const user = new User();
        user.createUser(username, email, password, role);
    }
};

module.exports = UsersController;