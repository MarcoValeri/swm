import express from 'express';

const router = express.Router();

// Controllers
import { adminLoginController } from '../../controllers/admin/adminLoginController';

// Set the routes
router.get('/admin-login', adminLoginController);

export { router };