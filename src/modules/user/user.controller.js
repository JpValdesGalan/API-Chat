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
    create: (req, res) => {
        console.log('User created');
    },
    update: (req, res) => {
        console.log('User updated');
    },
    login: (req, res) => {
        console.log('Login');
    },
    register: (req, res) => {
        console.log('register');
    },
    
}

module.exports = UsersController;