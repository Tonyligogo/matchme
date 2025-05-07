'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, label}) => {
    const pathname = usePathname()
  return (
    <li>
        <Link href={href} className={`${pathname === href ? 'text-red-500' : ''}`}>{label}</Link>
    </li>
  )
}

export default NavLink