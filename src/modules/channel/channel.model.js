const Model = require('../../core/model');

class Channel extends Model{
    constructor() {
        super('channels');
    }

    createChannel() {
        try{
            this.collection.insertOne({});
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = Channel;