import { Query } from "..";
import { Users, NewUser, UpdateUser } from '../../types';

const getAll = () => Query<Users>("SELECT * FROM Users");

const getOne = (id: number) => Query<Users>("SELECT * FROM Users WHERE id = ?", [id]);

const getbyEmail = (email: string) => Query<Users[]>("SELECT * FROM Users WHERE email = ?", [email]);

const create = (newUser: NewUser) => Query("INSERT INTO Users SET ?", [newUser]);

const update = (id: number, pizza: UpdateUser) => Query("UPDATE Users SET ? WHERE id = ?", [pizza, id]);

const destroy = (id: number) => Query("DELETE FROM Users WHERE id = ?", [id]);

export default {
    getAll, 
    getOne,
    getbyEmail,
    create,
    update,
    destroy
};