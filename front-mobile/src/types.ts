export type Order ={
    id: number,
    address: string,
    latitude: number,
    longitude: -46.656139,
    moment: string,
    status: string,
    total: number;
    products: Product[];
}

export type Product ={
    id:number;
    name:string;
    price:number;
    description:string;
    imageUri:string;
}