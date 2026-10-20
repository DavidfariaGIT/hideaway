import Link from "next/link";

export default function NavLink({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="hover:bg-gray-200 hover:text-gray-500 py-2 px-3 rounded-full cursor-pointer">
      <Link href={href}>{children}</Link>
    </li>
  );
}
