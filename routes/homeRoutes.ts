import express from 'express';

const router = express.Router();

// Controllers
import { homeController } from '../controllers/homeController';

// Set the routes
router.get('/', homeController);

export { router };