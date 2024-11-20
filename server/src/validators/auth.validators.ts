import {body} from 'express-validator'

export const loginValidator = [
    body('email', 'Invalid does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid does not empty').not().isEmpty(),
  ];
  

  export const signUpValidator=[
    body('email', 'Invalid does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid does not empty').not().isEmpty(),
    body('userName','Invalid does not empty').not().isEmpty()
  ]