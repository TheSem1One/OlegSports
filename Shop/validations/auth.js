import { body } from "express-validator";
export const registerValidation = [
    body('email','Неправильний логін чи пароль').isEmail(),
    body('password','Неправильний логін чи пароль').isLength({min : 8}),
    body('firstName','Вкажіть імя').isLength({min : 3}),
    body('lastName' , 'Вкажіть імя').isLength({min : 4}),
    body('avatarUrl').optional().isURL(),
];