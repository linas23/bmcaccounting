const Bill = require('../models/bill');
const catchAsync = require('../utils/catchasync');
const Student = require('../models/student');

exports.getAllBill = catchAsync(async(req,res,next)=>{
        const bills = await Bill.find({});
        
        res.status(200).json({
                "status":"success",
                bills
        })
})      


exports.createBill = catchAsync(async(req,res,next)=>{
        
        console.log(req.body)

        const {particulars,studentId} = req.body;

        const student = await Student.findById(studentId);
        console.log(student)

        const newBill = await Bill.create({
                particulars,
                studentId
        })

        /* Student.update(
                {_id:studentId},
                {$push:newBill._id}
        ) */
        student.bills.push(newBill._id);
        await student.save();

        res.status(201).json({
                "status":"success",
                bill:newBill
        })
})