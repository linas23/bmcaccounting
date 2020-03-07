function validationError(err,req,res){
    console.log(err.message)
    res.status(400).json({
        "status":"error",
        "err":err.message
    });
}



module.exports = function(err,req,res,next){
    // console.log(err.message)
    const error = { ...err }
    error.message = err.message;
    if(err.statusCode ==  400) return err;
    // res.status(error.statusCode).json({
        // error
    // });
    if(err.name =  'ValidatorError') return validationError(err,req,res);

    res.send(err.message);
}