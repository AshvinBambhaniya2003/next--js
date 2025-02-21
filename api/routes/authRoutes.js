const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { login, signup, logout } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Example of protected route
router.get('/me', protect, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
