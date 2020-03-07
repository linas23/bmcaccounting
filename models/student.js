const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"This field is required."]
    },
    lastName:{
        type:String,
        required:[true,"This field is required."]

    },
    email:{
        type:String,
        required:[true,"This field is required."]

    },
    address:{
        type:String,
        required:[true,"This field is required."]

    },
    faculty:{
        type:String,
        required:[true,"This field is required."]

    },
    rollno:{
        type:Number,
        required:[true,"This field is required."]

    },
    phone:{
        type:Number,
        required:[true,"This field is required."]

    },
    level:{
        type:String,
        required:[true,"This field is required."]

    },
    bills:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Bill',
            default:null
        }

    ]
},{
    toJSON:{virtuals:true},
    toObject: { virtuals: true }
})

studentSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;
