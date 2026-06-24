"use client";

import { useRouter } from "next/navigation";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";



export default function LandingNavbar() {

  const router = useRouter();
  const pathname = usePathname();
  

  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#040B1F]/90 border-b border-slate-800">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
            🎯
          </div>

          <h1 className="text-3xl font-bold">
            Lottery
            <span className="text-cyan-400">
              AI
            </span>
          </h1>

        </div>

        {/* Menu */}

        <div className="hidden lg:flex items-center gap-10">

          <Link
  href="/"
  className={`transition ${
    pathname === "/"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  Home
</Link>

          <Link
  href="/features"
  className={`transition ${
    pathname === "/features"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  Features
</Link>

          <Link
  href="/analytics"
  className={`transition ${
    pathname === "/analytics"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  Analytics
</Link>

          <Link
  href="/login"
  className={`transition ${
    pathname === "/login"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  Dashboard
</Link>

          <Link
  href="/about"
  className={`transition ${
    pathname === "/about"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  About
</Link>

          <Link
  href="/contact"
  className={`transition ${
    pathname === "/contact"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  Contact
</Link>

        </div>

<div className="flex items-center gap-4">

  {pathname.startsWith("/users") && user ? (

    <div className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
  >
    👤 {user.name} ▼
  </button>

  {open && (
    <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">

      <button
        onClick={() => router.push("/users/profile")}
        className="w-full text-left px-4 py-3 hover:bg-slate-800"
      >
        👤 Profile
      </button>

      <button
        onClick={() => router.push("/users/settings")}
        className="w-full text-left px-4 py-3 hover:bg-slate-800"
      >
        ⚙ Settings
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          router.push("/login");
        }}
        className="w-full text-left px-4 py-3 text-red-400 hover:bg-slate-800"
      >
        🚪 Logout
      </button>

    </div>
  )}
</div>

  ) : (

    <>
      <button
        onClick={() => router.push("/login")}
        className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-500 transition"
      >
        Login
      </button>

      <button
        onClick={() => router.push("/register")}
        className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
      >
        Sign Up
      </button>
    </>

  )}

</div>
      </div>

    </nav>
  );
}