import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GoPlus } from "react-icons/go";
import Image from 'next/image';
import { GoBookmark } from "react-icons/go";

interface FakeStoreApiData {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}
const Card = ({product}: { product: FakeStoreApiData }) => {
  return (
    <div
        className="bg-white text-black rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="relative w-full aspect-[4/3]">
            <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            />
            <div className='absolute text-black text-3xl top-2 right-2'>
                <GoBookmark/>
            </div>
        </div>

        <div className="relative mt-4 bg-[#141414] p-4 shadow-inner">
            <p className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {product.title}
            </p>
            <div className="mt-2 flex items-end gap-2">
                <p className="text-2xl font-bold text-white">
                    ₹{Math.ceil(product.price)}
                </p>
                <div className="flex items-center gap-1 mb-1">
                    <del className="text-sm text-gray-400">₹{Math.ceil(product.price)}0</del>
                    <span className="text-sm text-green-400 font-medium">(50% Off)</span>
                </div>
            </div>
            <div className='absolute bottom-3 right-3 text-white'>
                <HiOutlineShoppingBag className='text-3xl relative'/>
                <GoPlus className='bg-gray-900 rounded-full absolute -bottom-[5px] -right-[5px]'/>
            </div>
        </div>

    </div>
  )
}

export default Card