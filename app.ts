import express from 'express';

import { router as homeRouter } from './routes/homeRoutes';

const app = express();
const port = 3000;

// views
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(homeRouter);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})