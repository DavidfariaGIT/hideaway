export type Product = {
    id: number,
    title:string,
    brand: string,
    price: number,
    image:string,
    style:string,
    description: string,
    sizes: string[]
    year:number
    popular?: boolean | undefined, 
}