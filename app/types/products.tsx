export type Product = {
    id: number,
    title:string,
    price: number,
    image:string,
    style:string,
    description: string,
    popular?: boolean | undefined, 
}