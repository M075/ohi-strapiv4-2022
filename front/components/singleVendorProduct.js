import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '../lib/client';

const SingleVendor = ({ vendorProduct }) => {
	return (
    <>
<a href="/[storeProduct].js" className="group">
  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    <img src={urlFor(vendorProduct.logo.asset)} 
    alt="" 
    className="w-full h-full object-center object-cover group-hover:opacity-75"
    width={50}
    height={50} />
  </div>
  <h3 className="mt-4 text-sm text-gray-700">{vendorProduct.title}</h3>
  {/* <p className="mt-1 text-lg font-medium text-gray-900">R{vendor.defaultProductVariant.price}</p> */}
</a>

      </>
	)
}
export default SingleVendor

