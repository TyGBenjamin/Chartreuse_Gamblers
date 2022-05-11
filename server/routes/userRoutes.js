const express = require('express');
const { registerUser, authUser } = require('../controllers/userControllers');
const router = express.Router();

/* router.post('/register', registerUser);
router.route("/login").post(authUser); */
router.route('/register').post(registerUser);
router.route("/login").post(authUser);

module.exports = router;