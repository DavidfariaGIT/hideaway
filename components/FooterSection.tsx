
export default function FooterSection({
  children,
  links,
}: {
  children: string
  links: string[]
}) {
  return (
    <section className="py-10 flex lg:flex-col items-center">
      <h3 className="text-md 3xl:text-lg ml-10 lg:mr-auto">{children}</h3>
      <div className="border border-t border-gray-200 w-[50%] lg:w-full m-auto my-5 mx-5"></div>
      <ul className="flex justify-around gap-5 mr-5 lg:mr-auto">
        {links.map((l) => {
          return (
            <li key={l} className="bg-gray-200 text-gray-600 lg:text-[1rem] 3xl:text-[1.1rem] inline-block py-1 px-4 lg:px-6 rounded-[15px]">
              {l}
            </li>
          )
        })}
      </ul>
    </section>
  );
}
