const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    "date":{
        type:Date,
        default:Date.now()
    },
    "particulars":[
        {
            type:Object,
            required:[true,"This field is required."]
        },

    ],
    "studentId":{
        type: mongoose.Schema.Types.ObjectId,
        required:[true,"This field is required."]
    }
});


const Bill = mongoose.model('Bill',billSchema);


module.exports = Bill;
