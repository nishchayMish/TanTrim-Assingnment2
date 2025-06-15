import { PRODUCTS } from '@/constants';
import Image from 'next/image';

const Bags = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-black py-10 px-8 text-white">
      <div className="w-full mt-5 overflow-x-auto sm:overflow-hidden">
        <div className="flex items-center justify-center sm:justify-between gap-4 px-6">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="scrollbar flex flex-col items-center hover:bg-[#141414] p-2 sm:p-8 rounded-full  transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                height={80}
                width={80}
                className="object-contain rounded sm:aspect-video aspect-ratio "
              />
              <p className="text-sm font-medium text-gray-500">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bags;
