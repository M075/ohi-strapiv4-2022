import Link from "next/link";
import NavbarTop from "../../components/Navbar";
import { client } from "../../lib/client";
import SingleVendor from '../../components/singleVendor';

export default function Store({ vendors }) {

	return (
		<>
			<NavbarTop />
			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">Stores</h1>
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{
							vendors.map((vendor) => <SingleVendor key={vendor.id} vendor={vendor} />)
						}
					</div>
				</div>
			</div>
		</>
	)
}

export const getServerSideProps = async () => {
	const vendorQuery = `*[_type == "vendor"]`
	const vendors = await client.fetch(vendorQuery)

	return {
		props: { vendors }
	}
}