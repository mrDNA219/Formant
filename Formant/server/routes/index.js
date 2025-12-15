import { Router } from 'express';

const indexRouter = Router();


indexRouter.get('/', (req, res) => {
    res.send("Welcome to the Formant API!");
})

import paintRouter from './paint_router.js';
indexRouter.use('/paints', paintRouter);

export default indexRouter;

