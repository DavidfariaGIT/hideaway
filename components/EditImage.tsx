import Image from 'next/image'


export default function EditImage({image, title, desc}:{
    image: any,
    title: string,
    desc: string
}) {
  return (
        <div className='pb-20'>
          <Image src={image} alt="inventory collection" width={1800} />
          <div className="flex justify-evenly gap-5 mr-40 ">
            <h2>{title}</h2>
            <p className='ml-25 mr-auto'>{desc}</p>
          </div>
        </div>
  )
}
