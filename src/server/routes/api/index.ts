import * as express from 'express';
import booksRouter from '../api/booksRouter';
import usersRouter from '../api/usersRouter';
import catRouter from '../api/catRouter';

const router = express.Router();
router.use('/books', booksRouter);
router.use('/users', usersRouter);
router.use('/categories', catRouter);



export default router;