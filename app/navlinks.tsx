'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: 'Home', href: '/' },
  { name: 'Login', href: '/private' },
];

export function Navlinks() {
  const pathname = usePathname()

  return (
    <ul className="flex items-center justify-between gap-3 mr-auto">
      {navlinks.map(link => {
        const isActive = pathname === link.href
        return (
          <li className="ml-12" key={link.name}>
            <Link 
              href={link.href} 
              className={`${isActive ? 'text-violet-500' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}