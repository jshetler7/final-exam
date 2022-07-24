import * as express from 'express';
import db_books from '../../database/queries/books';
import { isUser } from '../../middlewares';

const router = express.Router();


router.get('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const book = await db_books.getOne(id);
        res.json(book[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Get one book failed." });
    }
});

router.get('/', async(req, res) => {
    try {
        const allBooks = await db_books.getBookCategory();
        res.json(allBooks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Get all books failed." });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, author, price } = req.body;
        await db_books.update(id, { title, author, price });
        res.status(200).json({ message: "Successfully updated book." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Update book failed." });
    }
});

router.post('/', async(req, res) => {
    try {
        const { title, author, price, categoryid } = req.body;
        const results = await db_books.create(title, author, price, categoryid);
        res.status(200).json({ message: "Successfully added book.", id: results.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Create book failed." });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        await db_books.destroy(id);
        res.status(200).json({ message: "Successfully deleted book." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Delete book failed." });
    }
});


export default router;