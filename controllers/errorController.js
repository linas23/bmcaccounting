function validationError(err,req,res){
    console.log(err.message)
    res.send(err.message);
}



module.exports = function(err,req,res,next){

    if(err.name =  'ValidatorError') return validationError(err,req,res);

    res.send(err.message);
}