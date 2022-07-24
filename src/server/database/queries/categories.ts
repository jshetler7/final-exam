import { Query } from "..";
import { Categories } from "../../types";

const getAll = () => Query<Categories>("SELECT * FROM Categories");
const getOne = (id) => Query<Categories>("SELECT * FROM Categories WHERE id = ?", [id])

export default{
    getAll,
    getOne
};