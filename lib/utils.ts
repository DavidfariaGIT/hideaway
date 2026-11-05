import products from "@/data/products.json"


export function getProductById(id: number) {
    return products.find(p => p.id === id)
}

export function getAllProducts() {
    return products
}

export function getQueryParams(searchParams: {
    search?: string,
    sort?: string,
    filter?: string,
    page?: number
}) {

    const sort = searchParams.sort?.toLowerCase() || ""

    const rawFilter = searchParams.filter?.toLowerCase()
    let filter
    if (rawFilter === undefined) {
        filter = ''
    } else {
        filter = ["year", 'a-z', 'price'].includes(rawFilter) ? rawFilter : null
    }

    const search = searchParams.search?.toLowerCase() || ""

    const rawPage = searchParams.page
    let page
    if (rawPage === undefined) {
        page = 1
    } else {
        const parsedPage = Number(rawPage)
        page = Number.isNaN(parsedPage) ? 0 : parsedPage
    }

    return { sort, filter, search, page }
}