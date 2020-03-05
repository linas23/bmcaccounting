const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    faculty:{
        type:String,
    },
    rollno:{
        type:Number
    },
    phone:{
        type:Number,
    },
    level:{
        type:String
    }
},{
    toJSON:{virtuals:true},
    toObject: { virtuals: true }
})

studentSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;
