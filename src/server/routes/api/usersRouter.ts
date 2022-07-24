import * as express from 'express';
import db_users from '../../database/queries/users';
import { isUser } from '../../middlewares';

const router = express.Router();


router.get('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await db_users.getOne(id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Get user failed." });
    }
});

router.get('/', async(req, res) => {
    try {
        const allUsers = await db_users.getAll();
        res.json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Get all users failed." });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email, password } = req.body;
        await db_users.update(id, { name, email, password });
        res.status(200).json({ message: "Successfully updated user." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Update user failed." });
    }
});

router.post('/', async(req, res) => {
    try {
        const newUser = req.body;
        const results = await db_users.create(newUser);
        res.status(200).json({ message: "Successfully added user.", id: results.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Create user failed." });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        await db_users.destroy(id);
        res.status(200).json({ message: "Successfully deleted user." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Delete user failed." });
    }
});


export default router;