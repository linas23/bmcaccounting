const Bill = require('../models/bill');
const catchAsync = require('../utils/catchasync');
const Student = require('../models/student');
const BillDetail = require('../models/billDetails');
const AppError = require('../utils/appError');

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

//  set the billing details

exports.saveBillDetail = catchAsync(async(req,res,next)=>{
        console.log(req.body)
        const { title, amount, faculty } = req.body;
        
        const bill = await BillDetail.create({
                title,
                amount,
                faculty
        })

        if(!bill) return next(new AppError("cannot save a bill at a moment",400));

        res.status(200).json({
                "status":"success",
                "data":bill
        });
    })
    
// get all bills records 
exports.getAllBillRecords = catchAsync(async(req,res,next)=>{
        const bills = await BillDetail.find({});
        res.status(200).json({
                "status":"success",
                "data":bills
        })
})