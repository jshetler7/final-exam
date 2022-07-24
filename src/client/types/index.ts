export interface Books {
    id: number;
    title: string;
    author: string;
    price: number;
    categoryid: number;
    category_name: string;
    _created: Date | string;
};

export interface BooksWithCat extends Books {
    name: string;
}

export interface Categories {
    id: number;
    name: string;
};