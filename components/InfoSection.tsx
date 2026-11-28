

export default function InfoSection({children, title}:{
    children:any
    title:string
}) {
  return (
   <section>
        <div className="flex flex-col justify-center items-center my-15 px-12 text-gray-800">
            <p className="pb-2 text-lg mr-auto">{title}</p>
            <div className="w-full mr-auto my-4 bg-gray-800/20 h-0.5"></div>
            <p className="leading-7">{children}</p>
        </div>
    </section>
  )
}
