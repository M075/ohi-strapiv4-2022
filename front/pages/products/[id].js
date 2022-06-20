import Link from 'next/link'
import { getProduct, getProducts } from '../../lib/products'
import Image from 'next/image'
import NavbarTop from '../../components/Navbar'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { ApiError } from '../../lib/api'

// export async function getStaticPaths() {
// 	const products = await getProducts()
// 	const paths = products.map(product => {
// 		return { params: { id: product.id.toString()}}
// 	})
// 	return {
// 		// path in url /store/get-individual-product-by-id
// 		paths,
// 			// params: refers to dynamic value of id which changes
// 			// id: refers to filename [id].js and then we convert the id of
// 			// each product because it is stored as a number in JSON file
			
// 		// prevent 404 for new products added after build time
// 		fallback: 'blocking',
// 	} 
// }

// export async function getStaticProps({ params: { id } }) {
// 	try {
// 		const data = await JSON.stringify(getProduct(id))
// 		// const product = JSON.stringify(data) // IMPORTANT!!! this solves serializing data error, id has to be a string
// 		return {
// 			props: { product, data },
// 			revalidate: parseInt(process.env.REVALIDATE_SECONDS)
// 		}
// 	} catch (err) {
// 		if (err instanceof ApiError && err.status === 404) {
// 		  return { notFound: true };
// 		}
// 		throw err;
// 	  }
// 	}

export async function getStaticPaths() {
	const res = await fetch('http://localhost:1337/api/products?populate=*')
	const products = await res.json()
	const paths = products?.data.map(_product => {
		return {
			params: {id: _product.id.toString()}
		}
	})
	console.log(`${paths}`)
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context) {
	const id = context.params.id
	const res = await fetch(`http://localhost:1337/api/products/${id}?populate=*`)
	const product = await res.json()
	return { 
		props: { product }
	}
}

// Using const for naming fn fixed product.values being undefined
const ProductPage = ({ product}) => {
	console.log(`${product.data.attributes.image.data[0].attributes.name}`)
	return (
		
		<Layout title={product.data.attributes.name}>
			<NavbarTop />
			<section className='text-gray-600 body-font overflow-hidden'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='lg:w-4/5 mx-auto flex flex-wrap'>
						<img
							alt='ecommerce'
							className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
							src={`${product.data.attributes.image.data[0].attributes.name}`}
							width={480}
							height={320}
						/>
						<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h2 className='text-sm title-font text-gray-500 tracking-widest'>
								{product.data.attributes.store.data.attributes.name}
							</h2>
							<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
								{product.data.attributes.name}
							</h1>
							<div className='flex mb-4'>
								<span className='flex items-center'>
									<svg
										fill='currentColor'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-4 h-4 text-green-500'
										viewBox='0 0 24 24'
									>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
									</svg>
									<svg
										fill='currentColor'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-4 h-4 text-green-500'
										viewBox='0 0 24 24'
									>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
									</svg>
									<svg
										fill='currentColor'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-4 h-4 text-green-500'
										viewBox='0 0 24 24'
									>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
									</svg>
									<svg
										fill='currentColor'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-4 h-4 text-green-500'
										viewBox='0 0 24 24'
									>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
									</svg>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-4 h-4 text-green-500'
										viewBox='0 0 24 24'
									>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
									</svg>
									<span className='text-gray-600 ml-3'>4 Reviews</span>
								</span>
								<span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s'>
									<a className='text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
										</svg>
									</a>
									<a className='text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
										</svg>
									</a>
									<a className='text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
										</svg>
									</a>
								</span>
							</div>
							<p className='leading-relaxed'>{''}</p>
							<div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
								<div className='flex'>
									<span className='mr-3'>Color</span>
									<button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none' />
									<button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none' />
									<button className='border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none' />
								</div>
								<div className='flex ml-6 items-center'>
									<span className='mr-3'>Size</span>
									<div className='relative'>
										<select className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10'>
											<option>SM</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</select>
										<span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												className='w-4 h-4'
												viewBox='0 0 24 24'
											>
												<path d='M6 9l6 6 6-6' />
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className='flex'>
								<span className='title-font font-medium text-3xl text-gray-900'>
								R{product.data.attributes.price}
								</span>
								<button className='flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded'>
									Button
								</button>
								<button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
									<svg
										fill='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-5 h-5'
										viewBox='0 0 24 24'
									>
										<path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Layout>
	)
	}
		export default ProductPage

