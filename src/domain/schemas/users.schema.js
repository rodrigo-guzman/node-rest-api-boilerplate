const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    lastname: Joi.string().min(2).max(30).required(),
    birthday: Joi.date().required(),
    is_active: Joi.boolean().required(),
    email: Joi.string().required(),
    genere: Joi.string().max(10).required()
});


module.exports = userSchema;