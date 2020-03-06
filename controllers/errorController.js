function validationError(err,req,res){
    console.log(err.message)
    res.status(400).json({
        "status":"error",
        "err":err.message
    });
}



module.exports = function(err,req,res,next){
    console.log(err)
    if(err.statusCode ==  400) return err;
    if(err.name =  'ValidatorError') return validationError(err,req,res);

    res.send(err.message);
}