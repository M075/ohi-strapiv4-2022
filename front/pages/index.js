// import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import TopBanner from '../components/TopBanner'

export default function HomePage() {
	return (
		<>
			<TopBanner />
			<div className='relative' style={{ backgroundImage: 'url(/clouds.jpg)' }}>
				{/* <Navbar /> */}
				<Header />
			</div>
		</>
	)
}
