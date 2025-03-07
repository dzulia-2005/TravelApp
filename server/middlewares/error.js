const errorHandler = (err,req,res,next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json({error:err.message});
    }

    res.status(500).json({error:"Internal Server Error"});
}

class CustomError extends Error {
    constructor(message,status=500) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;

        Error.captureStackTrace(this,this.constructor);
    }
}