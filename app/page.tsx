import Bags from '@/components/Bags';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';

const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full overflow-hidden'>
      <Navbar/>
      <Bags />
      <Products />
    </div>
  )
}

export default Home;