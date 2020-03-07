const mongoose = require('mongoose');

const billDetailSchema = new mongoose.Schema({
    "title":{
        type:String,
        required:true
    },
    "amount":{
        type:Number,
        required:true

    },
    "faculty":{
        type:String,
        required:true
    }
})


const BillDetail = mongoose.model('BillDetail',billDetailSchema);


module.exports = BillDetail;