import express from 'express';

import { router as homeRouter } from './routes/homeRoutes';
import { router as adminRouter } from './routes/admin/adminRoutes';

import { adminAuthMiddleware } from './middleware/authMiddleware';

const app = express();
const port = 3000;

// views
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(homeRouter);
app.use('/admin', adminAuthMiddleware, adminRouter);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})