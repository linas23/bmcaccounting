class AppError extends Error{
    constructor(){
        super(message,statusCode);
        this.statusCode = statusCode;
        Error.captureStackTrace();
    }
    
}

module.exports = AppError;