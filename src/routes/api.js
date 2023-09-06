const express = require('express');//call express js
const router = express.Router();//Make router obj from express.js


const demoController = require('../controller/demoController');

router.get('/demo1', demoController.demo1);
router.get('/demo2', demoController.demo2);
router.get('/demo3', demoController.demo3);
router.get('/demo4', demoController.demo4);


//Export Router
module.exports = router;
