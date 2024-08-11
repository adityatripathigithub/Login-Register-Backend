var express = require('express');
const { homepage, Signuppage } = require('../controllers/userControlers');
var router = express.Router();

/* GET users listing. */
router.get('/', homepage);


router.post('/register',Signuppage);

module.exports = router;
