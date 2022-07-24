import { Query } from "..";
import { Categories } from "../../types";

const getAll = () => Query<Categories[]>("SELECT * FROM Categories");
const getOne = (id: string) => Query<Categories[]>("SELECT * FROM Categories WHERE id = ?", [id])

export default{
    getAll,
    getOne
};