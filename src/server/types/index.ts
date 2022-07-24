export interface Users {
    id: string,
    password: string;
    email: string;
    name: string;
    username: string;
    role: string;
};

export interface NewUser {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface UpdateUser {
    name: string;
    email: string;
    password: string;
}

export interface Books {
    id: number;
    title: string;
    author: string;
    price: number;
    categoryid: number;
    _created: Date | string;
};

export interface BooksWithCat extends Books {
    name: string;
}


export interface UpdateBook {
    title: string;
    author: string;
    price: number;
}

export interface Categories {
    id: number;
    name: string;
};

export interface Payload {
    id: string;
    role: string;
}