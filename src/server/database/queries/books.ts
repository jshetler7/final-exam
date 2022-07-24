import { Query } from "..";
import { Books, BooksWithCat, UpdateBook } from '../../types';

const getAll = () => Query<Books[]>("SELECT * FROM Books");

const getOne = (id: number) => Query<BooksWithCat[]>("SELECT Books.*, Categories.name FROM Books JOIN Categories ON Categories.id = Books.categoryid WHERE Books.id = ?", [id]);

const create = (title: string, author: string, price: number, categoryid: number) => 
    Query("INSERT INTO Books (title, author, price, categoryid) VALUES (?, ?, ?, ?)", [title, author, price, categoryid]);

const update = (id: number, pizza: UpdateBook) => Query("UPDATE Books SET ? WHERE id = ?", [pizza, id]);

const destroy = (id: number) => Query("DELETE FROM Books WHERE id = ?", [id]);

const getBookCategory = () => Query<BooksWithCat[]>("SELECT Books.*, Categories.name FROM Books JOIN Categories ON Categories.id = Books.categoryid ORDER BY title ASC");


export default {
    getAll, 
    getOne,
    create,
    update,
    destroy,
    getBookCategory
};