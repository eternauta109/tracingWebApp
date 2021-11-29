function appError(err,req,res,next){
    res.status(err.code).send(err.message)
    next()
    
}

module.exports=appError;
