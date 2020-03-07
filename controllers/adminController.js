const Student = require('../models/student');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createNewStudent = catchAsync(async(req,res,next)=>{
    const { firstName,lastName , email, address, faculty, rollno, phone, level} = req.body;
    const student =await Student.create({
        firstName,
        lastName,
        email,
        address,
        faculty,
        rollno,
        phone,
        level
    })
    
    if(!student) return next(new AppError('Failed to create new student',400))
    
    res.status("201").json({
        "status":"success",
        student});
})

exports.getAllStudents = catchAsync(async(req,res,next)=>{
    const students = await Student.find({});
    res.status(200).json({
        students
    })
})

exports.updateStudent = catchAsync(async(req,res,next)=>{

    const { firstName,lastName , email, address, faculty, rollno, phone, level} = req.body;
    console.log(req.params.id)
    const student =await Student.findOneAndUpdate({_id:req.params.id},{
        firstName,
        lastName,
        email,
        address,
        faculty,
        rollno,
        phone,
        level
    },{new:true});

    res.status(200).send({
        student
    })
})

exports.studentsByFaculty = catchAsync(async(req,res,next)=>{

    const {faculty} = req.params;

    const students = await Student.find({faculty:faculty});

    res.status(200).json({
        "status":"success",
        "data":students
    })
})


//  get a particular student by searching
exports.searchStudent = catchAsync(async(req,res,next)=>{
    //search with the help of faculty and a roll no
    console.log(req.query)
    const { faculty , rollno , level } = req.query;
    console.log(faculty,rollno,level);
    const student = await Student.findOne({faculty,rollno,level});
    console.log(student);

    if(!student){
        next(new AppError('Student not found with those informations.',400));
    }

    res.status(200).json({
        "status":"success",
        "data":student
    })
})

// get a student's profile with id
exports.getStudentProfile = catchAsync(async(req,res,next)=>{
    const { id } = req.query;
    const student = await Student.findOne({_id:id}).populate('bills');
    console.log(student)

    res.status(200).json({
        "status":"success",
        "profile":student
    })
})

