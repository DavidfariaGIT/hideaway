
import Link from 'next/link'

export default function NotFoundUI({title, subtitle, linkText, link}:{
    title:string,
    subtitle:string,
    linkText:string,
    link:string
}) {
  return (
    <main>
      <div className='flex flex-col gap-4 mt-20 w-full px-20'>
      <h1 className='font-bold text-[1.5rem]'>{title}</h1>
      <p>{subtitle}</p>
      <Link
      href={link}
      className='bg-black text-white text-[1rem] text-center w-40 rounded-[15px] mt-5 py-3 hover:bg-gray-300'
      >
      {linkText}
      </Link>
      </div>
    </main>
  )
}
