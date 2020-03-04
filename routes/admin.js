const express = require('express')
const router = express.Router();
const Student = require('../models/student');

router.get('/',(req,res)=>{
    res.send('hello home admin');
})

router.post('/addNewStudent',async(req,res)=>{
    const { name , email, address} = req.body;

    const student =await Student.create({
        name,
        email,
        address
    })

    res.status("201").json({student});
})

module.exports = router;
