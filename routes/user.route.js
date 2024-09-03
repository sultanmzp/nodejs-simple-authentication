const {Register, Login} = require('../controllers/user.controller');//importing user controller
const express = require('express');

//get express router
const router = express.Router();

//route of signup: if abc.com/register entered
router.route('/register').post(Register);

//route of login: if abc.com/login entered
router.route('/login').post(Login);


//exporting router
module.exports = router;

