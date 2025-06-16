import { PRODUCTS } from '@/constants';
import Image from 'next/image';

const Bags = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-black py-10 px-8 text-white">
      {/* Scrollbar below sm, hidden above */}
      <div className="w-full mt-5 overflow-x-auto sm:overflow-visible">
        <div className="flex flex-nowrap gap-6 snap-x snap-mandatory sm:min-w-0 min-w-max px-2">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="min-w-[120px] sm:min-w-[160px] flex flex-col items-center justify-center rounded-xl px-4 py-2 snap-start"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative mb-2">
                <Image
                  src={item.image}
                  alt="bags"
                  layout="fill"
                  objectFit="contain"
                  className="sm:scale-130 scale-130"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bags;
