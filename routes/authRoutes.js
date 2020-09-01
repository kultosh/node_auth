const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/signup', authController.signup_create);
router.post('/signup', authController.signup_store);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

module.exports = router;