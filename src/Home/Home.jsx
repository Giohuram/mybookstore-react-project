import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'

function Home() {
  return (
    <div className=''>
        <Banner />
        <BestSellerBooks />
        <FavBook />
        <PromoBanner />
        <OtherBooks />
        <Reviews /> 
    </div>
  )
}

export default Home