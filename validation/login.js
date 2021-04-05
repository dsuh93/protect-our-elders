const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.password = validText(data.password) ? data.password : '';

    if(!Validator.isLength(data.username, { min: 6, max: 30 })) {
        errors.username = 'Username must be between 6 and 30 characters';
    }

    if(Validator.isEmpty(data.username)){
        errors.username = "Username can't be blank";
    }

    if(!Validator.isLength(data.password, { min: 6, max: 30 })){
        errors.password = 'Password must be at least 6 characters'
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password can't be blank";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}