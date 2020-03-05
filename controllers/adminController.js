const Student = require('../models/student');
const catchAsync = require('../utils/catchAsync');

exports.createNewStudent = catchAsync(async(req,res,next)=>{
    const { firstName,lastName , email, address, faculty,rollno,phone,} = req.body;
    const student =await Student.create({
        firstName,
        lastName,
        email,
        address,
        faculty,
        rollno,
        phone
    })
    
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

    console.log(req.params.id);
    const { name , email, address, faculty } = req.body;

    const student =await Student.findOneAndUpdate({_id:req.params.id},{
        name,
        email,
        address,
        faculty
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
    console.log(req.body)
    //search with the help of faculty and a roll no
    const { faculty,rollno } = req.body;

    const student = await Student.find({faculty,rollno});
    console.log(student);


    res.status(200).json({
        "status":"success",
        "data":student
    })
})

// get a student's profile with id

exports.getStudentProfile = catchAsync(async(req,res,next)=>{
    const { id } = req.query;
    const student = await Student.findOne({_id:id});
    console.log(student)

    res.status(200).json({
        "status":"success",
        "profile":student
    })
})