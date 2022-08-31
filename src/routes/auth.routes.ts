// Setup
import express from 'express';
const router = express.Router();

// Controllers
import authController from '../controllers/auth.controller';

// Routes
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;
