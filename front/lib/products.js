import { fetchJson } from "./api"

const {CMS_URL} = process.env

export async function getProduct(id) {
	const product = await fetchJson(`${CMS_URL}/products/${id}?populate=*`)
	// const product = await res.json()
	return stripProduct(product)
}

export async function getProducts() {
	const products = await fetchJson(`${CMS_URL}/products?populate=*`)
	
	// return stripProduct(products)
	return products.data.map(stripProduct)
}
function stripProduct(product) {
	return {
		id: product.id,
		title: product.name,
		description: product.description,
		price: '$' + product.price,
		pictureUrl: CMS_URL + product.image,
	}
}
