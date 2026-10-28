import type { Product } from '@/lib/types';
import Image from "next/image"
import Link from 'next/link'


export default function ProductCard({children, product, shop}: {
   children:string, 
   product: Product, 
   shop: boolean
}) {
    const {id, price, image, style} = product

    return (
        <Link href={`/shop/${id}`}>
        <section className='mb-10'>
        <div className={`bg-gray-100 ${shop ? 'h-80 px-5' : 'h-125' } rounded-[15px] flex flex-col items-center justify-center py-2`}>
            <Image 
                src={image}
                alt={`image of ${children}`}
                width={shop ? 170 : 270}
                height={200}
                className='rounded-[15px]'
            />
        </div>
        <div className='text-center'>
        <p className='mt-4 text-sm text-gray-600'>{children}</p>
        <p className='mt-1 text-sm text-gray-400'>{style}</p>
        <p className='mt-4 p-1.5 rounded-full text-white bg-black inline-block text-xs'>${price}</p>
        </div>
        </section> 
        </Link>
    )
}