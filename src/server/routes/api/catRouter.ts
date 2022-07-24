import * as express from 'express';
import db_cat from '../../database/queries/categories';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allCategories = await db_cat.getAll();
        res.json(allCategories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Get all categories failed." });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const category = await db_cat.getOne(id);
        res.json(category[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Get one category failed." });
    }
})

export default router;