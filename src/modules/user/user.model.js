const Model = require('../../core/model');

class User extends Model {
    constructor() {
        super('users');
    }

    createUser(username, email, password, role) {
        try{
            this.collection.insertOne({username:username, email:email, password:password, role:role});
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = User;