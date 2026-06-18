"use client";

import { useRouter } from "next/navigation";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LandingNavbar() {
  const router = useRouter();
  const pathname = usePathname();

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
  href="/how-it-works"
  className={`transition ${
    pathname === "/how-it-works"
      ? "text-cyan-400 font-semibold"
      : "text-slate-400 hover:text-white"
  }`}
>
  How It Works
</Link>

          <a className="text-slate-400 hover:text-white transition">
            About
          </a>

          <a className="text-slate-400 hover:text-white transition">
            Contact
          </a>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-4">

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

        </div>

      </div>

    </nav>
  );
}