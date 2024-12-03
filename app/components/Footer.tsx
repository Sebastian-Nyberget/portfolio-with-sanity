"use client";

import Link from "next/link";
import { navigationItems } from "./navbar";

export function Footer() {
  return (
    <footer>
      <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
              {item.name}
            </Link>
          </div>
        ))}
      </ul>     
    </footer>
  )
}