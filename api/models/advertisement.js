const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdvSchema = new Schema(
{
imageUrl : {
type:String,
required: 'imageUrl cannot be blank'
},
name: {
type: String,
required: 'name cannot be blank'
}
},
{ collection: 'Adv' }
);

module.exports = mongoose.model('Adv', AdvSchema);	