var express = require('express');
var router = express.Router();
const maincontroller=require('../Controllers/main');
/* GET home page. */
router.get('/', maincontroller.home )
router.get('/ABC', maincontroller.ABC )
router.get('/Contact', maincontroller.Contact )
router.get('/Login', maincontroller.Login )
//data taken from to main.js ;

//now main.js is he controllers;

module.exports = router;
