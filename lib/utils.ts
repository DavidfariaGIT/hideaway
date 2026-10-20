import products from "@/data/products.json"


export function getProductById(id: number) {
    return products.find(p => p.id === id)
}

export function getAllProducts() {
    return products
}