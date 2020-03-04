const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    }

})

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;
