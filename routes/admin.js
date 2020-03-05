const express = require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/',(req,res)=>{
    res.send('hello home admin');
})

router.post('/addNewStudent',adminController.createNewStudent);
router.get('/getAllStudents',adminController.getAllStudents);
router.patch('/updateStudent/:id',adminController.updateStudent);
router.get('/studentsByFaculty/:faculty',adminController.studentsByFaculty);
router.get('/searchStudent',adminController.searchStudent);
router.get('/studentProfile',adminController.getStudentProfile);
module.exports = router;
