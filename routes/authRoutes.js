const {Router} = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_create);
router.post('/signup', authController.signup_store);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout);

module.exports = router;