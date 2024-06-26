export type Prodotto = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

export type Rating = {
    rate: number
    count: number
}

/* export interface User {
    id: number;
    nome: string;
    email: string;
    saluta(): string;
    calcolaEta(anno: number): number;
} */