export interface BaseProduct {
    category: string;
    title: string;
    description: string;
    price: number;
    employee: string;
    reviews: string[];
}

export interface Product extends BaseProduct {
    id: string;
}

export interface SetProduct extends BaseProduct {}