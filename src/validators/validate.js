const { validationResult } = require('express-validator');

const handleValidation = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

module.exports = handleValidation;