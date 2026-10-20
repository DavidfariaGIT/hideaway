import type { Product } from '../types/products';
import Image from "next/image"
import Link from 'next/link'


export default function ProductCard({children, product}: {
   children:string, 
   product: Product
}) {

    const {id, price, image, style} = product


    return (
        <Link href={`/shop/${id}`}>
        <section className='mb-10'>
        <div className='bg-gray-100 h-125 rounded-[15px] flex flex-col items-center justify-between py-2'>
            <p className='text-orange-300 mt-4'>Popular</p>
            <Image 
                src={image}
                alt={`image of ${children}`}
                width={270}
                height={200}
                className='mb-10 rounded-[15px]'
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