export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: ICategory;
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

export interface IToken {
    access_token: string;
    refresh_token: string;
}

export interface ICreds {
    email: string;
    password: string;
}

export interface IError {
    error: boolean;
    message: string;
}

export interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: Date;
    updatedAt: Date;
}

