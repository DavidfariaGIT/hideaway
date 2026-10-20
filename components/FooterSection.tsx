
export default function FooterSection({
  children,
  links,
}: {
  children: string
  links: string[]
}) {
  return (
    <section className="py-10 flex items-center">
      <h3 className="text-md ml-10">{children}</h3>
      <div className="border border-t border-gray-200 w-[50%] m-auto my-5 mx-5"></div>
      <ul className="flex justify-around gap-5 mr-5">
        {links.map((l) => {
          return (
            <li key={l} className="bg-gray-200 text-gray-600 text-sm inline-block py-1 px-4 rounded-[15px]">
              {l}
            </li>
          )
        })}
      </ul>
    </section>
  );
}
