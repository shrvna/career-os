"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Assistant", path: "/assistant" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Profile", path: "/profile" },
    { name: "Feedback", path: "/feedback" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <div className="font-bold text-lg tracking-tight">
            Career OS
          </div>
        </Link>

        {/* NAV ITEMS */}
        <div className="flex gap-2">

          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}