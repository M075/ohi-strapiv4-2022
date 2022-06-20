import Link from "next/link";
import { useRouter } from "next/router";
import NavbarTop from "../../components/Navbar";
// import { client } from "../../lib/client";
// import { getProducts } from '../../lib/products'
import SingleProduct from '../../components/Card';
import Card from "../../components/Card";


export default function Store({ products, vendors }) {
	return (
		<>
			<NavbarTop />
			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">Products</h1>
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{
							products.data.map((product) => 
							<Card 
							key={product.id} 
							href={`products/${product.id}`}
							image={product.attributes.image.data[0].attributes.name}
							title={product.attributes.name}
							price={product.attributes.price}
							product={product} 
							/>)
						}
					</div>
				</div>
			</div>
		</>
	)
}


export async function getServerSideProps() {
	const res = await fetch(`${process.env.CMS_URL}/products?populate=*`)
	const products = await res.json()
	return {
		props: { products },
		
	}
}
// export const getServerSideProps = async () => {
// 	const query = `*[_type == "product"]`
// 	const products = await client.fetch(query)
// 	const vendorQuery = `*[_type == "vendor"]`
// 	const vendors = await client.fetch(vendorQuery)

// 	return {
// 		props: { products, vendors }
// 	}
// }