const Model = require('../../core/model');

class Message extends Model{
    constructor() {
        super('messages');
    }

    createMessage(author, body, date) {
        try{
            this.collection.insertOne({author:author, body:body, date:date});
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = Message;