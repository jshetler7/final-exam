import * as express from 'express';

import apiRouter from '../routes/api';
// import authRouter from '../routes/auth';

const router = express.Router();

router.use('/api', apiRouter);
// router.use('/auth', authRouter);

export default router;