import express from 'express'
import authController from '../controllers/auth.controller'
import validator from 'express-validation'
import authValidator from '../validators/auth.validator'


const router=express.Router();


router.route('/signUp')
.post(validator(authValidator.signUp),authController.SignUpHandler)

export default router