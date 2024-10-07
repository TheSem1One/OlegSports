import { body } from "express-validator";
export const loginValidation = [
    body('email','Неправильний логін чи пароль').isEmail(),
    body('password','Неправильний логін чи пароль').isLength({min : 8}),
];
export const registerValidation = [
    body('email','Неправильний логін чи пароль').isEmail(),
    body('password','Неправильний логін чи пароль').isLength({min : 8}),
    body('firstName','Вкажіть імя').isLength({min : 3}),
    body('lastName' , 'Вкажіть імя').isLength({min : 4}),
    body('avatarUrl').optional().isURL(),
];
export const productCreateValidation = [
    body('nameOfProduct','Введіть назву товару').isLength({min : 3 }).isString(),
    body('productPrice', 'Введіть ціну товару').isString(),
    body('description' , 'Введіть опис товару').isLength({min:20}).isString(),
    body('tags','Вкажіть теги товару').optional().isArray(),
    body('imageUrl','Вкажіть посилання на зоображення').isString(),
];