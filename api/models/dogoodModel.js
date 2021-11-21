const mongoose = require('mongoose');

const { Schema } = mongoose;

const campSchema = new Schema(
{

Topic : {
    type:String,
    required: 'Topic cannot be blank'
},
Message: {
    type: String,
    required: 'Message cannot be blank'
},
PostedBy : {
    type:String,
    required: 'PostedBy cannot be blank'
},
PostedDate : {
    type:Date,
    required: 'Date cannot be blank'
},
image : {
    type:String,

},
status : {
    type: String,
    default: 'Pending'
}
},
{ collection: 'Campaign' }
);

module.exports = mongoose.model('Campaign', campSchema);	