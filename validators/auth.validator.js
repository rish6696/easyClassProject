import Joi from 'joi'

const signUp={
    body:{
        name:Joi.string().required(),
        email:Joi.string().email(),
        phoneNumber:Joi.string().required()
    }
}

export default {
    signUp
}